import { createContext, ReactNode, useEffect, useState } from 'react';

interface TransactionData {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
}

interface TransactionContextType {
    transactions: TransactionData[];
}

interface TransactionsProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<TransactionData[]>([]);
    useEffect(() => {
        fetch('http://localhost:3333/transactions')
            .then((response) => response.json())
            .then((data) => setTransactions(data));
    }, []);
    return <TransactionsContext.Provider value={{ transactions }}>{children}</TransactionsContext.Provider>;
}
