// import ButtonAddToCart from "../ButtonAddToCart";
import styled from "styled-components";

const BoxProduct = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 1rem;
  background: #ffffff;
  border-radius: 0.5rem;
  width: 48.75rem;
  height: 22.875rem;
  border-top: 0.125rem solid #425dc7;
  margin-bottom: 1rem;
`;

const ProductName = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: 0.005em;
  color: #101010;
`;

const BoxPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ListPrice = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgba(0, 0, 0, 0.6);
`;

const Price = styled(ListPrice)`
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

const TitleBoxProduct = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #555555;
`;

const Card = ({ product }: any) => {
  const { image, name, listPrice, price } = product;

  return (
    <BoxProduct>
      <img src={image} alt={name} width='40px' />
      <ProductName>{name}</ProductName>
      <BoxPrice>
        <TitleBoxProduct>Valor unitário</TitleBoxProduct>
        <ListPrice>{listPrice}</ListPrice>
        <Price>{price}</Price>
      </BoxPrice>
    </BoxProduct>
  );
};

export default Card;
