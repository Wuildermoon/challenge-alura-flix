import styled from "styled-components";

const StyledFieldset = styled.fieldset`
  border: none;
  margin: 10px;

  label {
    display: block;
    width: 100%;
    font-family: var(--font-bold);
    font-size: 20px;
    line-height: 24px;
    color: var(--white);
    margin: 10px 0;
    box-sizing: border-box;
  }

  input,
  select,
  textarea {
    height: 45px;
    width: 100%;
    border-radius: 10px;
    border: 3px solid var(--blue);
    background-color: transparent;
    color: var(--light-gray);
    font-size: 20px;
    line-height: 24px;
    box-sizing: border-box;
    padding: 5px 15px;
  }

  textarea {
    height: auto;
    resize: none;
  }
`;

export default StyledFieldset;
