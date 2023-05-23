import styled from "styled-components";

const BoxOrderResume = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.5);
  height: 6rem;
  margin-bottom: 1rem;
`;

const TitleResume = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rem;
  color: #101010;
`;

const OrderResume = () => {
  return (
    <BoxOrderResume>
      <TitleResume>Resumo do pedido</TitleResume>
    </BoxOrderResume>
  );
};

export default OrderResume;
