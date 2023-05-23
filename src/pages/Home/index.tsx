import { useContext } from "react";
import Header from "../../components/Header";
import { useQuery } from "@apollo/client";
import { ORDER_FORM } from "../../graphql/order-form";
import { OrderForm } from "../../types/order-form";
import { Context } from "../../context/Context";
import Card from "../../components/CardProduct";
import OrderResume from "../../components/OrderResume";
import "./styles.css";

const Home = () => {
  const { loading, error, data } = useQuery<OrderForm>(ORDER_FORM, {
    variables: {
      input: {
        orderFormId: "c7eb7303-c53f-417d-8d51-cce67e5959e1",
      },
    },
  });
  const { orderForm, setOrderForm } = useContext(Context);

  if (loading) return <h3>Carregango informações da loja</h3>;

  if (error) return `Error! ${error.message}`;

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
