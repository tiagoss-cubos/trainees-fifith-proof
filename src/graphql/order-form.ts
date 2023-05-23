import { gql } from "@apollo/client";

export const ORDER_FORM = gql`
  query orderFom($input: OrderFormInput!) {
    orderForm(input: $input) {
      id
      items {
        id
        image
        name
        listPrice
        price
        shipping {
          delivery {
            days
            value
          }
          pickup
        }
      }
    }
  }
`;
