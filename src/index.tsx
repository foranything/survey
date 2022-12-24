import * as React from 'react'
import Styled from './style/component'

interface Props {
  title: string;
}

export const Survey = ({title}: Props) => {
  return <Styled.Container>
    <Styled.CntChk>
      <Styled.Header>{title}</Styled.Header>
    </Styled.CntChk>
  </Styled.Container>
}
