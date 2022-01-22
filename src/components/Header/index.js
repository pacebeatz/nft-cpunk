import { useContext } from 'react';
import { FiSearch, FiSun } from 'react-icons/fi';
import { ThemeContext } from '../../contexts/ThemeContext';

import * as S from './styles';

export function Header(){
    const { handleToggleTheme, selectedTheme } = useContext(ThemeContext);

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
            <S.ButtonToggleTheme 
                onClick={handleToggleTheme}
                isLighted={selectedTheme === 'light'}
            >
                <FiSun />
            </S.ButtonToggleTheme>
            <S.ButtonGetIn>Get in</S.ButtonGetIn>
        </S.Container>
    )
}