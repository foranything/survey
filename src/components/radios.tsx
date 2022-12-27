import React from 'react';
import styled from 'styled-components';
import { Option } from './checkboxes'
import { Radio } from './radio';

const BoxRadio = styled.div<{ visible: boolean }>`
  transform: ${props => props.visible ? 'scaleY(1)': 'scaleY(0)'};
  height: ${props => props.visible ? '100%': '0'};
  padding: ${props => props.visible ? '10px 30px 0': '0 30px 0'};
  transform-origin: 0px 0px;
  transition: transform .5s, height .3s, padding .5s;
  background-color: #f4f6f8;
  border: 1px solid #c2c4cc;
  border-top: none;
  span {
    display: block;
    margin-bottom: 20px;
  }
  label {
    font-size: 15px;
    line-height: 1.6em;
    font-weight: 300;
    letter-spacing: 0;
    margin-left: 10px;
    margin-right: 20px;
  }
`;

interface Props {
  options: Option[];
  group: string;
  visible: boolean;
}

export const Radios = ({options, group, visible}: Props) => (
  <BoxRadio visible={visible}>
    {options?.map(option => (
      <Radio key={option.key} option={option} group={group} visible={visible} />
    ))}
  </BoxRadio>
);
