import styled from 'styled-components';

export const Container = styled.header`
    padding: 16px;
    
    display: flex;
    align-items: center;
    justify-content: space-around;

    color: #fff;

    border-bottom: 1px solid #2c2c2e;

    .logo {
        text-transform: uppercase;
        font-size: 1.5rem;

        background: radial-gradient( circle 1259px at 2.8% 48.8%,  rgba(255,243,110,1) 0%, rgba(30,204,214,1) 45.6%, rgba(5,54,154,1) 65.9% );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    nav {
        margin: 0 2rem;

        a {
            color: #6c6c6e;

            & + a {
                margin-left: 32px;
            }

            &:hover{
                color: #fff;
            }
        }
    }
`;

export const SearchBar = styled.div`
    margin-left: 2rem;
    padding: 0 16px;
    flex: 1;

    display: flex;
    align-items: center;

    background-color: #1c1c1e;

    border-radius: 15px;

    input {
        margin-left: 8px;
        padding: 16px 0;

        flex: 1;

        background-color: transparent;
        border: none;
        outline: none;

        color: #fff;

        &::placeholder{
            color: #aaa;
        }
    }

    svg {
        color: #fff;
    }

    @media(max-width: 480px){
        display: none;
    }
`;

export const ButtonToggleTheme = styled.button`
    width: 48px;
    height: 48px;

    border-radius: 50%;

    display: grid;
    place-content: center;

    background-color: #1c1c1e;

    svg {
        width: 16px;
        height: 16px;
        color: #fff;
    }

    &:hover{
        svg{
            color: rgb(255,243,110);
        }
    }
    
    @media(max-width: 480px){
        display: none;
    }
`;

export const ButtonGetIn = styled.button`
    margin-left: 16px;
    padding: 16px 32px;

    background-image: radial-gradient( circle 1259px at 2.8% 48.8%,  rgba(255,243,110,1) 0%, rgba(30,204,214,1) 45.6%, rgba(5,54,154,1) 65.9% );
    border-radius: 15px;

    text-transform: uppercase;
    font-weight: 700;

    &:hover{
        opacity: 0.75;
    }

    @media(max-width: 480px){
        display: none;
    }
`;