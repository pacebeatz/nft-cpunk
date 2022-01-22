import { useContext } from "react";
import { Header, Main, PunkList } from "../../components";
import { PunkContext } from "../../contexts/PunkContext";

import { Container } from './styles';

export function Home(){
    const { punkListData } = useContext(PunkContext);
    return (
        <Container>
            <Header />
            {
                punkListData.length > 0 && (
                    <>
                        <Main />
                        <PunkList />
                    </>
                )
            }
        </Container>
    )
};