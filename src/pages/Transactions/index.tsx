import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { SearchForm } from './components/SearchForm';
import * as S from './styles';

export function PageTransactions() {
    return (
        <div>
            <Header />
            <Summary />
            <S.Container>
                <SearchForm />
                <S.TransactionsTable>
                    <tbody>
                        <tr>
                            <td style={{ width: '40%' }}>Desenvolvimento de site</td>
                            <td>
                                <S.PriceHighlight variant="income">R$ 12.000,00</S.PriceHighlight>
                            </td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>
                        <tr>
                            <td style={{ width: '40%' }}>Alimentação</td>
                            <td>
                                <S.PriceHighlight variant="outcome">- R$ 12.000,00</S.PriceHighlight>
                            </td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>
                    </tbody>
                </S.TransactionsTable>
            </S.Container>
        </div>
    );
}
