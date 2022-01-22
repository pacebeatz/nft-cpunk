import { useContext } from 'react';
import { PunkContext } from '../../contexts/PunkContext';

import * as S from './styles';

export function Main() {
  const { selectedPunk: { id, name, image, owner } } = useContext(PunkContext);

  return (
    <S.Container>
        <img src={image} alt={name} />
          <div className="details">
              <h2>
                {name}
                <strong>#{id}</strong>
              </h2>
              <S.OwnerContainer>
                  <img src={owner.avatar} alt=""/>
                  <div>
                    <p>{owner.user}</p>
                    <span>{owner.address}</span>
                  </div>
              </S.OwnerContainer>
          </div>
    </S.Container>
  )
}
