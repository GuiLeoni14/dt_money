import { useContext } from 'react';
import { TransactionsContext } from '../contexts/TransactionsContext';

export const useTransactions = () => {
    const { transactions } = useContext(TransactionsContext);
    return { transactions };
};
