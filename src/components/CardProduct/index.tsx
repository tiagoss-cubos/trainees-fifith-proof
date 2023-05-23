// import ButtonAddToCart from "../ButtonAddToCart";
import styled, { StyledComponent } from "styled-components";
import AddButton from "../AddButton";
import QuantitySelector from "../QuantitySelector";
import { BsTrash } from "react-icons/bs";
import { ValueFormated } from "../../utills";

const Container: StyledComponent<unknown> = styled.div`
  display: flex;
  flex-direction: column;
  width: 48.75rem;
  height: 22.875rem;
  padding: 1rem;
  background: #ffffff;
  border-radius: 0.5rem;
  border-top: 0.25rem solid #425dc7;
  margin-bottom: 1rem;
`;

const BoxProduct: StyledComponent<unknown> = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductName: StyledComponent<unknown> = styled.p`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: 0.005em;
  color: #101010;
  margin: 0;
`;

const BoxColumn: StyledComponent<unknown> = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const BoxFlex: StyledComponent<unknown> = styled(BoxColumn)`
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

const ListPrice: StyledComponent<unknown> = styled.span`
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgba(0, 0, 0, 0.6);
`;

const Price: StyledComponent<unknown> = styled(ListPrice)`
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

const TitleBoxProduct: StyledComponent<unknown> = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #555555;
  padding-bottom: 1.5rem;
  margin: 0;
`;

const Available: StyledComponent<unknown> = styled(TitleBoxProduct)`
  padding-bottom: 0;
  &::after {
    content: " CD São Paulo";
    font-weight: 600;
    color: #2e44a1;
  }
`;

const FlagDisconunt: StyledComponent<unknown> = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #ffffff;
  width: 3rem;
  height: 1.25rem;
  background: #eb0045;
  border-radius: 31.25rem;
  margin-top: 0.625rem;
`;

const MoreOptions: StyledComponent<unknown> = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #2e44a1;
  margin: 0;
`;

const BoxContainer: StyledComponent<unknown> = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0 1rem;
  border-bottom: 1px solid #e5e5e5;
`;

const Card = ({ product }: any) => {
  const { image, name, listPrice, price } = product;

  return (
    <>
      <Container>
        <BoxProduct>
          <BoxColumn>
            <TitleBoxProduct>Produto</TitleBoxProduct>
            <BoxFlex>
              <img src={image} alt={name} width='40px' />
              <BoxColumn>
                <ProductName>{name}</ProductName>
                <Available>Disponível em</Available>
              </BoxColumn>
            </BoxFlex>
          </BoxColumn>
          <BoxColumn>
            <TitleBoxProduct>Valor unitário</TitleBoxProduct>
            <ListPrice>{ValueFormated(parseFloat(listPrice))}</ListPrice>
            <Price>{ValueFormated(parseFloat(price))}</Price>
            <FlagDisconunt>-30%</FlagDisconunt>
          </BoxColumn>
          <BoxColumn>
            <TitleBoxProduct>Quantidade</TitleBoxProduct>
            <BoxFlex>
              <QuantitySelector />
              <BsTrash />
            </BoxFlex>
          </BoxColumn>
        </BoxProduct>
        <BoxContainer>
          <AddButton />
          <MoreOptions>Ver mais opções</MoreOptions>
        </BoxContainer>
      </Container>
    </>
  );
};

export default Card;
