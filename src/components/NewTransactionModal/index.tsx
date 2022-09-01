import * as S from './styles';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { api } from '../../lib/api';
import { useTransactions } from '../../hooks/useTransactions';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { useContextSelector } from 'use-context-selector';

const newTransactionFromSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome']),
});

type NewTransactionFromInputs = z.infer<typeof newTransactionFromSchema>;

export function NewTransactionModal() {
    const createTransaction = useContextSelector(TransactionsContext, (context) => {
        return context.createTransaction;
    });
    const {
        control,
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting },
    } = useForm<NewTransactionFromInputs>({
        resolver: zodResolver(newTransactionFromSchema),
        defaultValues: {
            type: 'income',
        },
    });
    const handleCreateNewTransaction = async (data: NewTransactionFromInputs) => {
        const { category, description, price, type } = data;
        createTransaction({ category, description, price, type });
        reset(); // resetar formulário
    };
    return (
        <Dialog.Portal>
            <S.Overlay>
                <S.Content>
                    <Dialog.Title>Nova transação</Dialog.Title>
                    <S.CloseButton>
                        <X size={24} />
                    </S.CloseButton>
                    <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                        <input {...register('description')} type="text" placeholder="Descrição" required />
                        <input
                            {...register('price', { valueAsNumber: true })}
                            type="number"
                            placeholder="Preço"
                            required
                        />
                        <input {...register('category')} type="text" placeholder="Categoria" required />
                        <Controller
                            control={control}
                            name="type"
                            render={({ field }) => {
                                return (
                                    <S.TransactionType onValueChange={field.onChange} value={field.value}>
                                        <S.TransactionTypeButton variant="income" value="income">
                                            <ArrowCircleUp size={24} /> Entrada
                                        </S.TransactionTypeButton>
                                        <S.TransactionTypeButton variant="outcome" value="outcome">
                                            <ArrowCircleDown size={24} /> Saída
                                        </S.TransactionTypeButton>
                                    </S.TransactionType>
                                );
                            }}
                        />
                        <button type="submit" disabled={isSubmitting}>
                            Cadastrar
                        </button>
                    </form>
                </S.Content>
            </S.Overlay>
        </Dialog.Portal>
    );
}
