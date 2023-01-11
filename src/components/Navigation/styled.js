import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* background-color: ${({ theme }) => theme.primary}; */
  color: ${({ theme }) => theme.primaryPrimary};
  padding: 40px 0 0 0;

  img {
    height: 50px;
    margin-left: 20px;
  }

  button {
    margin-right: 10px;
  }

  button:first-child,
  button:nth-child(3) {
    ${({ theme: { breakPoints } }) => breakPoints.down('sm')} {
      display: none;
    }
  }

  .text {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .logo {
    position: react-transition;
    right: 0;
    top: 0;
    width: 60px;
    height: 60px;
  }

  button:nth-child(3) {
    height: 37px;
    width: 37px;
    background-color: transparent;
    border: none;
    outline: none;
  }

  ion-icon {
    font-size: 28px;
    color: ${({ theme }) => theme.primaryText};
    &:hover {
      color: red;
    }
  }

  .btns {
    display: flex;
    align-items: center;
  }

  /* 
  ion-icon[name='close-outline'] {
    color: red;
    z-index: 15;
  }
  */
`;
export const StyledLinkItem = styled(Link)`
  list-style: none;
  text-decoration: none;
  border-bottom: 2px solid ${({ active, theme }) => (active ? theme.tertiary : 'transparent')};
  color: white;
  font-size: 14px;

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.tertiary};
    color: lightcyan;
    transition: 1000ms;
  }

  ${({ theme: { breakPoints } }) => breakPoints.down('md')} {
    color: black;
    margin-bottom: 20px;
    padding: 5px;
    border-bottom: none;

    &:hover {
      border-bottom: none;
      color: black;
    }
  }
`;