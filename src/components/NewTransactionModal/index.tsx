import * as S from './styles';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const newTransactionFromSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    //type: z.enum(['income', 'outcome']),
});

type NewTransactionFromInputs = z.infer<typeof newTransactionFromSchema>;
export function NewTransactionModal() {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<NewTransactionFromInputs>({
        resolver: zodResolver(newTransactionFromSchema),
    });
    const handleCreateNewTransaction = async (data: NewTransactionFromInputs) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(data);
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
                        <S.TransactionType>
                            <S.TransactionTypeButton variant="income" value="income">
                                <ArrowCircleUp size={24} /> Entrada
                            </S.TransactionTypeButton>
                            <S.TransactionTypeButton variant="outcome" value="outcome">
                                <ArrowCircleDown size={24} /> Saída
                            </S.TransactionTypeButton>
                        </S.TransactionType>
                        <button type="submit" disabled={isSubmitting}>
                            Cadastrar
                        </button>
                    </form>
                </S.Content>
            </S.Overlay>
        </Dialog.Portal>
    );
}
