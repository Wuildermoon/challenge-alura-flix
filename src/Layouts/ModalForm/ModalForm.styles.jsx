import styled from "styled-components";

const StyledForm = styled.form`
  h2 {
    font-family: var(--font-bold);
    font-size: 60px;
    line-height: 70.31px;
    color: #2271d1;
    display: inline;
  }

  fieldset:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
    padding: 25px 0;
    border: none;
  }
`;

export default StyledForm;
