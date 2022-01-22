import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;

    background-color: ${props => props.theme.background};

    .wrapper {
        max-width: 1200px;
        margin: 0 auto;
    }
`;