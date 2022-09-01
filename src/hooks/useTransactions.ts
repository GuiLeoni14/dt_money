import { useContextSelector } from 'use-context-selector';
import { TransactionsContext } from '../contexts/TransactionsContext';

export const useTransactions = () => {
    const transactions = useContextSelector(TransactionsContext, (context) => {
        return context.transactions;
    });
    const fetchTransactions = useContextSelector(TransactionsContext, (context) => {
        return context.fetchTransactions;
    });
    const createTransaction = useContextSelector(TransactionsContext, (context) => {
        return context.createTransaction;
    });

    return { transactions, fetchTransactions, createTransaction };
};
