import styled, { StyledComponent } from "styled-components";

const Button: StyledComponent<unknown> = styled.button`
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #2e44a1;
  background: rgba(255, 255, 255, 0.5);
  text-align: center;
  border: 0.0938rem solid #2e44a1;
  border-radius: 0.3125rem;
  box-sizing: border-box;
  padding: 0.625rem 1.6875rem;
  cursor: pointer;

  &:hover {
    background: #142159;
    color: #ffffff;
    transition: all 0.5s ease-in-out;
    border-color: #142159;
  }
`;

const AddButton = () => {
  return (
    <>
      <Button>Adicionar Garantia Estendida</Button>
    </>
  );
};

export default AddButton;
