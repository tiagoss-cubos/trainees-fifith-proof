import styled from "styled-components";
import BuyButton from "../BuyButton";

const BoxOrderResume = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(255, 255, 255, 0.5);
  height: 6rem;
  margin-bottom: 1rem;
`;

const TitleResume = styled.span`
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rem;
  color: #101010;
`;

const OrderResume = () => {
  return (
    <BoxOrderResume>
      <TitleResume>Resumo do pedido</TitleResume>
      <BuyButton />
    </BoxOrderResume>
  );
};

export default OrderResume;
