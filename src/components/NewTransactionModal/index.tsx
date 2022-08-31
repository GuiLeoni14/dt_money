import * as S from './styles';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';

export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <S.Overlay>
                <S.Content>
                    <Dialog.Title>Nova transação</Dialog.Title>
                    <S.CloseButton>
                        <X size={24} />
                    </S.CloseButton>
                    <form>
                        <input type="text" placeholder="Descrição" required />
                        <input type="number" placeholder="Preço" required />
                        <input type="text" placeholder="Categoria" required />
                        <button type="submit">Cadastrar</button>
                    </form>
                </S.Content>
            </S.Overlay>
        </Dialog.Portal>
    );
}
