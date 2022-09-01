import { ReactNode, useCallback, useEffect, useState } from 'react';
import { createContext } from 'use-context-selector';
import { api } from '../lib/api';

interface TransactionData {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
}

interface TransactionsProviderProps {
    children: ReactNode;
}

interface CreateTransactionData {
    category: string;
    description: string;
    price: number;
    type: 'income' | 'outcome';
}
interface TransactionContextType {
    transactions: TransactionData[];
    fetchTransactions: (query?: string) => Promise<void>;
    createTransaction: (data: CreateTransactionData) => Promise<void>;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<TransactionData[]>([]);

    const fetchTransactions = useCallback(async (query?: string) => {
        const response = await api.get('/transactions', {
            params: {
                _sort: 'createdAt',
                _order: 'desc',
                q: query,
            },
        });
        setTransactions(response.data);
    }, []);

    const createTransaction = useCallback(async (data: CreateTransactionData) => {
        const { category, description, price, type } = data;
        const createdAt = new Date();
        const response = await api.post('/transactions', {
            category,
            description,
            price,
            type,
            createdAt,
        });
        setTransactions((state) => [response.data, ...state]);
    }, []);

    useEffect(() => {
        fetchTransactions();
    }, [fetchTransactions]);
    return (
        <TransactionsContext.Provider value={{ transactions, fetchTransactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    );
}
