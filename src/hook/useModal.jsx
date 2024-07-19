import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";

const useModal = () => {
  const { isModalOpen, toggleModal, modalData, setModalData } =
    useContext(GlobalContext);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setModalData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formulario enviado", modalData);
    toggleModal();
  };

  const handleReset = (event) => {
    event.preventDefault();
    setModalData({
      title: "",
      category: "",
      image: "",
      video: "",
      description: "",
    });
  };

  return {
    isModalOpen,
    toggleModal,
    modalData,
    handleInputChange,
    handleSubmit,
    handleReset,
  };
};

export default useModal;
