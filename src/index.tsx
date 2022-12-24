import * as React from 'react'
import { Checkbox } from './components/checkbox';
import Styled from './style/components'
import { Util } from './util';

interface Props {
  title: string;
  items: Item[];
}

export interface Item {
  text: string;
  key: string;
  checked: boolean;
  getter: (value: boolean) => void;
}

export const Survey = ({title, items}: Props) => {
  items.forEach(item => {
    if (!item.key) item.key = Util.randChar();
  });
  return <Styled.Container>
    <Styled.CntChk>
      <Styled.Header>{title}</Styled.Header>
      <Styled.WrapChk>
        {items.map((item) => (
          <Checkbox key={item.key} id={item.key} text={item.text} getter={item.getter}/>
        ))}
      </Styled.WrapChk>
    </Styled.CntChk>
  </Styled.Container>
}
