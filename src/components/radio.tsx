import React, { MouseEventHandler, useRef } from "react";
import { Option } from './checkboxes'

interface Props {
  option: Option;
  group: string;
  visible: boolean;
}

export const Radio = ({option, group, visible}: Props) => {
  const radioBtn = useRef<HTMLInputElement>(null);
  if (!visible && radioBtn.current) {
    radioBtn.current.checked = false;
  }

  const onClick: MouseEventHandler<HTMLInputElement> = evt => {
    const value = (evt.target as HTMLInputElement).checked;
    console.log(value);
  }

  return <span>
    <input id={option.key} ref={radioBtn} type="radio" onClick={onClick} name={group}></input>
    <label>{option.text}</label>
  </span>
}
