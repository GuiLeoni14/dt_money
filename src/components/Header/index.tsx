import * as S from './styles';
import logoImg from '../../assets/img/logo.svg';
import * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionModal } from '../NewTransactionModal';

interface HeaderProps {}

export function Header(props: HeaderProps) {
    return (
        <S.Container>
            <S.Content>
                <img src={logoImg} alt="" />
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <S.NewTransactionButton>Nova transação</S.NewTransactionButton>
                    </Dialog.Trigger>
                    <NewTransactionModal />
                </Dialog.Root>
            </S.Content>
        </S.Container>
    );
}
