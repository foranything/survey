import React, { MouseEventHandler, useState } from 'react';
import styled from "styled-components";
import { Util } from '../util';
import { Item } from './checkboxes';
import { Radios } from './radios';

const BoxCheck = styled.div`
  border: 1px solid #c2c4cc;
  padding: 12px 30px;
  font-weight: 300;
  background-color: #fff;
  input {
    vertical-align: middle;
    width: 15px;
    height: 15px;
    border-color: #c2c4cc;
  }
  label {
    font-size: 18px;
    line-height: 1.2em;
    font-weight: 300;
    width: calc(100% - 23px);
    margin-left: 15px;
  }
`;

interface Props {
  item: Item;
}

export const Checkbox = ({item}: Props) => {

  const [checked, setChecked] = useState<boolean>(false);

  const onClick: MouseEventHandler<HTMLInputElement> = evt => {
    const value = (evt.target as HTMLInputElement).checked;
    setChecked(value);
    if (item.getter) item.getter(value);
  }
  if (item.options) {
    item.options.forEach(option => {
      if (!option.key) option.key = Util.randChar();
    })
  }

  return <React.Fragment>
    <BoxCheck>
      <input id={item.key} type="checkbox" onClick={onClick}></input>
      <label htmlFor={item.key} ><b>{item.text}</b></label>
    </BoxCheck>
    {item.options ? <Radios options={item.options} group={item.key} visible={checked}></Radios> : undefined}
  </React.Fragment>
}
