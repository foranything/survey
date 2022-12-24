import styled from "styled-components";

export const Header = styled.h4`
  ::before {
    content: '';
    width: 6px;
    height: 30px;
    background-color: #0c8ac5;
    position: absolute;
    left: 0;
    top: 0;
  }
  font-size: 24px;
  line-height: 30px;
  font-weight: 500;
  color: #333;
  position: relative;
  padding-left: 20px;
  margin: 0 0 40px 0;
`;