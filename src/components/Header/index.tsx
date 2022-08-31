import { Container } from './styles';
import * as S from './styles';
import logoImg from '../../assets/img/logo.svg';

interface HeaderProps {}

export function Header(props: HeaderProps) {
    return (
        <S.Container>
            <S.Content>
                <img src={logoImg} alt="" />
                <S.NewTransactionButton>Nova transação</S.NewTransactionButton>
            </S.Content>
        </S.Container>
    );
}
