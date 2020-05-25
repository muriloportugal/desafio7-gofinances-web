import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

interface LinkProps {
  isSelected: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      display: flex;
      align-items: center;

      img {
        width: 187px;
        height: 32px;
      }

      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;

          .bookmark {
            visibility: visible;
          }
        }

        .bookmark {
          background-color: #ff872c;
          width: 73px;
          height: 2px;
          margin-top: 9px;
          visibility: hidden;
        }
      }
    }
  }
`;
