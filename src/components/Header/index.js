import { FiSearch, FiSun } from 'react-icons/fi';

import * as S from './styles';

export function Header(){
    return (
        <S.Container>
            <h1 className="logo">NFT CPunk</h1>
            <S.SearchBar>
                <input type="text" placeholder="Collection, item or user..." tabIndex={0} />
                <FiSearch />
            </S.SearchBar>
            <nav>
                <a href="#">Drops</a>
                <a href="#">Marketplace</a>
                <a href="#">Create</a>
            </nav>
            <S.ButtonToggleTheme>
                <FiSun />
            </S.ButtonToggleTheme>
            <S.ButtonGetIn>Get in</S.ButtonGetIn>
        </S.Container>
    )
}