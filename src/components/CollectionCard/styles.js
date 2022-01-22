import styled from 'styled-components';

export const Container = styled.li`
    margin-right: 1rem;
    min-width: 280px;
    height: 450px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: ${props => props.theme.complementary};
    color: ${props => props.theme.title};

    border: 2px solid ${props=> props.selected ? props.theme.primary : 'transparent'};

    border-radius: 15px;

    figure, img {
        border-radius: 15px 15px 0 0;
    }

    figure {
        height: 800px;
        overflow: hidden;
        background: ${props => props.theme.complementary};

        img {
            width: 100%;
        }
    }

    .details {
        height: 100%;
        padding: 0.75rem;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    h3 {
        font-size: 1.5rem;
        strong {
            margin-left: 8px;
            color: ${props => props.theme.text};
        }
    }

    p {
        margin-top: 1rem;

        display: flex;
        align-items: center;

        font-size: 1.75rem;
        font-weight: bold;

        svg {
            color: ${props => props.theme.primary};
        }

        span {
            margin-left: 8px;
        }
    }

    &:hover {
        figure {
            img {
                transform: scale(1.2);
            }
        }
    }
`;

export const CollectionImg = styled.div`
    width: 100%;
`;