import * as React from 'react'
import Styled from '../style/components';
import { Checkbox } from "./checkbox";

export interface Item {
  text: string;
  key: string;
  getter?: (value: boolean) => void;
  options: Option[];
}

export interface Option {
  text: string;
  key: string;
}

interface Props {
  items: Item[];
}

export const Checkboxes = ({items}: Props) => (
  <React.Fragment>
    {items.map((item) => (
      <Styled.WrapChk key={item.key}><Checkbox item={item}/></Styled.WrapChk>
    ))}
  </React.Fragment>
);
