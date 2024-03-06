import styled from "styled-components";

export const AddBookmarkBox = styled.span`
  position: absolute;
  width: 40px;
  height: 40px;
  left: 30px;
  top: -12px;
  z-index: 1;
  animation: flyIn 1s ease;

  @keyframes flyIn {
    0% {
      transform: translateY(+20%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
