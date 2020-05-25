import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface UploadeFile {
  isFinished?: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 736px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Alert = styled.div<UploadeFile>`
  visibility: hidden;
  display: flex;
  height: 0px;
  width: 0px;
  padding: unset;
  opacity: 0;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  background-color: #12a454;
  color: white;
  transition: height 1s, width 1s, padding 1s, visibility 1s, opacity 0.5s ease-out;

  ${props =>
    props.isFinished &&
    css`
      visibility: visible;
      height: 50px;
      width: 100%;
      padding: 10px;
      opacity: 1;
    `}
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  color: #363f5f;
  text-align: center;
`;

export const ImportFileContainer = styled.section`
  background: #fff;
  margin-top: 40px;
  border-radius: 5px;
  padding: 64px;
`;

export const Footer = styled.section`
  margin-top: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 18px;
    color: #969cb3;

    img {
      margin-right: 5px;
    }
  }

  button {
    background: #ff872c;
    color: #fff;
    border-radius: 5px;
    padding: 15px 80px;
    border: 0;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#ff872c')};
    }
  }
`;
