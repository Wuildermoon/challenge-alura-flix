import styled from "styled-components";

const Overlay = styled.div`
  background-color: #03122fc2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

const StyledDialog = styled.div`
  width: 40vw;
  height: 80vh;
  position: inherit;
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden scroll;
  justify-content: flex-start;
  padding: 50px 100px;
  border-radius: 15px;
  border: 5px solid #6bd1ff;
  background-color: #03122f;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  img {
    position: absolute;
    width: 32px;
    top: 32px;
    right: 32px;
    cursor: pointer;
  }

  /* barra de desplazamiento */
  &::-webkit-scrollbar {
    width: 13px;
    height: 13px;
  }

  /* parte "track" (el fondo) de la barra de desplazamiento */
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  /* "thumb" (la parte que se desplaza) de la barra de desplazamiento */
  &::-webkit-scrollbar-thumb {
    background: var(--blue);
    border-radius: 10px;
  }

  /* "thumb" al pasar el cursor sobre él */
  &::-webkit-scrollbar-thumb:hover {
    background: #0a3066;
  }
`;

export { Overlay, StyledDialog };
