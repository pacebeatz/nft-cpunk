import { useContext } from "react";
import { Header, Main, PunkList } from "../../components";
import { PunkContext } from "../../contexts/PunkContext";

import * as S from './styles';

export function Home(){
    const { punkListData } = useContext(PunkContext);
    return (
        <S.Container>
            <div className="wrapper">
                <Header />
                {
                    punkListData.length > 0 && (
                        <>
                            <Main />
                            <PunkList />
                        </>
                    )
                }
            </div>
        </S.Container>
    )
};