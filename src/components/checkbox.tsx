import React, { MouseEventHandler } from 'react';
import styled from "styled-components";

const BoxCheck = styled.div`
  border: 1px solid #c2c4cc;
  padding: 12px 30px;
  font-weight: 300;
  background-color: #fff;
  margin-bottom: 10px;
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
  id: string;
  text: string;
  getter: (checked: boolean) => void;
}

export const Checkbox = ({id, text, getter}: Props) => {
  const onClick: MouseEventHandler<HTMLInputElement> = evt => {
    const value = (evt.target as HTMLInputElement).checked;
    if (getter) getter(value);
  }

  return <BoxCheck>
    <input id={id} type="checkbox" onClick={onClick}></input>
    <label htmlFor={id} ><b>{text}</b></label>
  </BoxCheck>
}
