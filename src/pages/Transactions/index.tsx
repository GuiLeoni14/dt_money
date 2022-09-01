import { useEffect, useState } from 'react';
import { useContextSelector } from 'use-context-selector';
import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { useTransactions } from '../../hooks/useTransactions';
import { dateFormatter, priceFormatter } from '../../utils/formatter';
import { SearchForm } from './components/SearchForm';
import * as S from './styles';

export function PageTransactions() {
    const transactions = useContextSelector(TransactionsContext, (context) => {
        return context.transactions;
    });
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
                                            {transaction.type === 'outcome' && '- '}
                                            {priceFormatter.format(transaction.price)}
                                        </S.PriceHighlight>
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </S.TransactionsTable>
            </S.Container>
        </div>
    );
}
