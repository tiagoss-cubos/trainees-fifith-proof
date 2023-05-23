type Delivery = {
  days: String!;
  value: String!;
};

type Shipping = {
  delivery: Delivery;
  pickup: boolean!;
};

export type OrderForm = {
  orderForm: {
    id: string!;
    items: Array<{
      id: string!;
      image: string!;
      name: string!;
      listPrice: string!;
      price: string!;
      shipping: Shipping!;
    }>;
  };
};
