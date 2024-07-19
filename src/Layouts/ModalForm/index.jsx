import React, { useContext } from "react";
import Button from "../../components/Button";
import FormFieldset from "../../components/FormFieldset";
import StyledForm from "./ModalForm.styles";
import { GlobalContext } from "../../context/GlobalContext";

const ModalForm = ({
  handleSubmit,
  handleReset,
  handleInputChange,
  modalData,
}) => {
  const { categories } = useContext(GlobalContext);
  return (
    <section>
      <StyledForm onSubmit={handleSubmit} onReset={handleReset}>
        <h2>Editar Card: </h2>
        <FormFieldset
          name="title"
          title="Título"
          type="text"
          value={modalData.title}
          onChange={handleInputChange}
          required
        />
        <FormFieldset
          tag="select"
          name="category"
          title="Categoría"
          value={modalData.category}
          onChange={handleInputChange}
          required
          options={categories}
        />
        <FormFieldset
          name="image"
          title="Imagen"
          type="url"
          value={modalData.banner}
          onChange={handleInputChange}
          required
        />
        <FormFieldset
          name="video"
          title="Video"
          type="url"
          value={modalData.link}
          onChange={handleInputChange}
          required
        />
        <FormFieldset
          tag="textarea"
          name="description"
          title="Descripción"
          value={modalData.description}
          onChange={handleInputChange}
          required
          cols="30"
          rows="10"
        />
        <fieldset>
          <Button
            type="submit"
            color="--blue"
            shadow="--blue"
            background="--black"
            weight="bold"
          >
            Guardar
          </Button>
          <Button type="reset" color="--white" weight="bold">
            Limpiar
          </Button>
        </fieldset>
      </StyledForm>
    </section>
  );
};

export default ModalForm;
