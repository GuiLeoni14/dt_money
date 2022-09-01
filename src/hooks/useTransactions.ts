import { useContext } from 'react';
import { TransactionsContext } from '../contexts/TransactionsContext';

export const useTransactions = () => {
    const { transactions, fetchTransactions, createTransaction } = useContext(TransactionsContext);
    return { transactions, fetchTransactions, createTransaction };
};
