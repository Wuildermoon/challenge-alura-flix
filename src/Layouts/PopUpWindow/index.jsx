import React from "react";
import useModal from "../../hook/useModal";
import { Overlay, StyledDialog } from "./PopUpWindow.styles";
import ModalForm from "../ModalForm";

const PopUpWindow = () => {
  const {
    isModalOpen,
    toggleModal,
    modalData,
    handleInputChange,
    handleSubmit,
    handleReset,
  } = useModal();

  if (!isModalOpen) return null;

  return (
    <Overlay onClick={toggleModal}>
      <StyledDialog onClick={(e) => e.stopPropagation()}>
        <img
          src="/images/icons/icon-cross.png"
          alt="Cerrar"
          onClick={() => toggleModal()}
        />
        <ModalForm
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          handleReset={handleReset}
          modalData={modalData}
        />
      </StyledDialog>
    </Overlay>
  );
};

export default PopUpWindow;
