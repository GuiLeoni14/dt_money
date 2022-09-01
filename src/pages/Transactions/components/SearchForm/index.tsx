import { MagnifyingGlass } from 'phosphor-react';
import { ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import * as S from './styles';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransactions } from '../../../../hooks/useTransactions';
import { useContextSelector } from 'use-context-selector';
import { TransactionsContext } from '../../../../contexts/TransactionsContext';

const searchFormSchema = z.object({
    query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
    const fetchTransactions = useContextSelector(TransactionsContext, (context) => {
        return context.fetchTransactions;
    });
    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    });

    const handleSearchTransactions = async (data: SearchFormInputs) => {
        await fetchTransactions(data.query);
    };

    return (
        <S.Container onSubmit={handleSubmit(handleSearchTransactions)}>
            <input {...register('query')} type="text" placeholder="Busque por transações" />
            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20} />
                Buscar
            </button>
        </S.Container>
    );
}
