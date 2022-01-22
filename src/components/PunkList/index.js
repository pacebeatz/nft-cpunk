import { useContext } from 'react';

import { CollectionCard } from '..';
import { PunkContext } from '../../contexts/PunkContext';

import * as S from './styles';

export function PunkList() {
  const { punkListData } = useContext(PunkContext);

  return (
    <S.Container>
      {
          punkListData.map(collection => (
                <CollectionCard 
                    key={collection.id}
                    collection={collection} 
                />
          ))
      }
    </S.Container>
  )
}
