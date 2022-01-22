import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 280px;    
    margin: 2rem 0;

    display: flex;
    flex-direction: row;
    align-items: center;

    img {
        width: 280px;

        border-radius: 15px;
    }

    h2 {
        color: #fff;
        font-size: 3rem;

        strong {
            margin-left: 16px;
            color: #aaa;
        }
    }

    .details {
        width: 100%;
        height: 100%;
        margin-left: 2rem;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    @media(max-width: 480px){
        height: auto;
        flex-direction: column;
        
        h2 {
            margin: 1rem 0;
            text-align: center;
        }
    }

`;

export const OwnerContainer = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 48px;
        margin-right: 8px;

        border-radius: 50%;
    }

    p {
        font-weight: bold;
        color: #fff;
    }

    span {
        color: #aaa;
    }
`;