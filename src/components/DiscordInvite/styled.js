/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledDiscordInviteWrapper = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  position: fixed;
  right: 20px;
  bottom: 20px;
  /* text-align: center; */
  padding: 10px 20px;
  border-radius: 7px;
  /* opacity: 0.9; */
  z-index: 100;
  cursor: pointer;

  display: flex;
  justify-content: center;
  gap: 20px;

  h3 {
    margin-bottom: 5px;
  }

  ion-icon {
    font-size: 5rem;
    opacity: 0.6;
  }

  div {
    text-align: right;
    ion-icon {
      /* position: absolute; */
      color: red;
      font-size: 2rem;
      cursor: pointer;
    }
  }

  /* Breakpoint */
  ${({ theme: { breakPoints } }) => breakPoints.down('sm')} {
    left: 20px;
    bottom: 2px;

    ion-icon {
      font-size: 4rem;
    }

    .btn-group ion-icon {
      padding: 5px;
    }

    h3 {
      font-size: 16px;
    }
  }
`;
