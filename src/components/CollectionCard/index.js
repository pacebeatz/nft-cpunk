import { useContext } from 'react';
import { FaEthereum } from 'react-icons/fa';

import { PunkContext } from '../../contexts/PunkContext';

import * as S from './styles';

export function CollectionCard({ collection }) {
  const { id, name, image, traits } = collection;
  const { handleSelectPunk, selectedPunk } = useContext(PunkContext);

  return (
    <S.Container 
      onClick={()=> handleSelectPunk(id)}
      selected={id === selectedPunk.id}
    >
      <figure>
        <img src={image } />
      </figure>
      <div className="details">
        <h3>{name}<strong>#{id}</strong></h3>
        <p>
            <FaEthereum />
            <span>{traits[0]?.value}</span>
        </p>
      </div>
    </S.Container>
  )
}
