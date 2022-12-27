import * as React from 'react'
import { Checkboxes, Item } from './components/checkboxes';
import Styled from './style/components'
import { Util } from './util';

interface Props {
  title: string;
  items: Item[];
}

export const Survey = ({title, items}: Props) => {
  items.forEach(item => {
    if (!item.key) item.key = Util.randChar();
  });
  return <Styled.Container>
    <Styled.CntChk>
      <Styled.Header>{title}</Styled.Header>
      <Checkboxes items={items}></Checkboxes>
    </Styled.CntChk>
  </Styled.Container>
}
