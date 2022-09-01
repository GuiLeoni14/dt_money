import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { useTransactions } from '../../hooks/useTransactions';
import { SearchForm } from './components/SearchForm';
import * as S from './styles';

export function PageTransactions() {
    const { transactions } = useTransactions();
    return (
        <div>
            <Header />
            <Summary />
            <S.Container>
                <SearchForm />
                <S.TransactionsTable>
                    <tbody>
                        {transactions.map((transaction) => {
                            return (
                                <tr key={transaction.id}>
                                    <td style={{ width: '50%' }}>{transaction.description}</td>
                                    <td>
                                        <S.PriceHighlight variant={transaction.type}>
                                            R$ {transaction.price}
                                        </S.PriceHighlight>
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>{transaction.createdAt}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </S.TransactionsTable>
            </S.Container>
        </div>
    );
}
