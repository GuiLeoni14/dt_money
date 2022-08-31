import { MagnifyingGlass } from 'phosphor-react';
import { ReactNode } from 'react';

import * as S from './styles';

export function SearchForm() {
    return (
        <S.Container>
            <input type="text" placeholder="Busque por transações" />
            <button type="submit">
                <MagnifyingGlass size={20} />
                Buscar
            </button>
        </S.Container>
    );
}
