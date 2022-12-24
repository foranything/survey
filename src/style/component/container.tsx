import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  letter-spacing: -0.075em;
`;

export const CntChk = styled.div`
  width: calc(100% - 400px);
  margin-right: 20px;
  background-color: #fff;
  border: 1px solid #e9ebf5;
  padding: 40px;
  box-sizing: border-box;
  @media screen and (max-width: 991px) {
    float: none;
    width: 100%;
    margin-right: 0;
    padding: 20px;
  }
`;