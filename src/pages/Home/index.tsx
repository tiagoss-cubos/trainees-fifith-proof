import { useContext } from "react";
import Header from "../../components/Header";
import { useQuery } from "@apollo/client";
import { ORDER_FORM } from "../../graphql/order-form";
import { OrderForm } from "../../types/order-form";
import { Context } from "../../context/Context";
import Card from "../../components/CardProduct";
import OrderResume from "../../components/OrderResume";
import styled, { StyledComponent } from "styled-components";
import "./styles.css";

const Loading: StyledComponent<unknown> = styled.p`
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rem;
  color: #2e44a1;
  margin-top: 2rem;
  text-align: center;
`;

const Error: tyledComponent<unknown> = styled(Loading)`
  color: rgb(255, 0, 0);
`;

const Home = () => {
  const { orderForm, setOrderForm } = useContext(Context);
  const { loading, error, data } = useQuery<OrderForm>(ORDER_FORM, {
    variables: {
      input: {
        orderFormId: "c7eb7303-c53f-417d-8d51-cce67e5959e1",
      },
    },
  });

  if (loading) {
    return (
      <>
        <Loading>Carregango informações da loja</Loading>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Error>`Error! ${error.message}`</Error>
      </>
    );
  }

  if (data) setOrderForm(data?.orderForm?.items);

  return (
    <>
      <Header />
      <OrderResume />
      {orderForm &&
        orderForm.map((product: any) => (
          <div className='containerProducts' key={product.id}>
            <Card product={product} />
          </div>
        ))}
    </>
  );
};

export default Home;
