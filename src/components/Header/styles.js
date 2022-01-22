import styled from 'styled-components';

export const Container = styled.header`
    padding: 16px;
    
    display: flex;
    align-items: center;
    justify-content: space-around;

    color: ${props => props.theme.title};

    border-bottom: 1px solid ${props => props.theme.complementary};

    .logo {
        text-transform: uppercase;
        font-size: 1.5rem;

        background: radial-gradient(circle 1259px at 2.8% 48.8%,  rgba(255,243,110,1) 0%, rgba(30,204,214,1) 45.6%, rgba(5,54,154,1) 65.9% );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    nav {
        margin: 0 2rem;

        a {
            color: ${props => props.theme.text};

            & + a {
                margin-left: 32px;
            }

            &:hover{
                color: ${props => props.theme.primary};
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

    background-color: ${props => props.theme.complementary};

    border-radius: 15px;

    input {
        margin-left: 8px;
        padding: 16px 0;

        flex: 1;

        background-color: transparent;
        border: none;
        outline: none;

        color: ${props => props.theme.title};

        &::placeholder{
            color: ${props => props.theme.text};
        }
    }

    svg {
        color: ${props => props.theme.title};
    }

    @media(max-width: var(--mobile)){
        display: none;
    }
`;

export const ButtonToggleTheme = styled.button`
    width: 48px;
    height: 48px;

    border-radius: 50%;

    display: grid;
    place-content: center;

    background-color: ${props => props.theme.complementary};

    svg {
        width: 16px;
        height: 16px;
        color: ${props => props.isLighted ? props.theme.primary : props.theme.text};
    }

    &:hover{
        svg{
            color: ${props => !props.isLighted ? props.theme.primary : props.theme.text};
        }
    }
    
    @media(max-width: var(--mobile)){
        display: none;
    }
`;

export const ButtonGetIn = styled.button`
    margin-left: 16px;
    padding: 16px 32px;

    background-image: radial-gradient(circle 1259px at 2.8% 48.8%,  rgba(255,243,110,1) 0%, rgba(30,204,214,1) 45.6%, rgba(5,54,154,1) 65.9% );
    border-radius: 15px;

    text-transform: uppercase;
    font-weight: 700;

    &:hover{
        opacity: 0.75;
    }

    @media(max-width: var(--mobile)){
        display: none;
    }
`;