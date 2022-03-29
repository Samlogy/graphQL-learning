import { gql } from "@apollo/client";

export const GET_ALL_PRODUCTS = gql`
  query Query {
    products(filter: { onSale: true }) {
      id
      name
      description
      quantity
      price
      image
      onSale
      categoryId
    }
  }
`;
export const GET_PRODUCT_BY_ID = gql`
  query Query($id: ID!) {
    product(id: $id) {
      name
      description
      quantity
      price
      image
      onSale
      categoryId
      id
    }
  }
`;

export const CREATE_PRODUCT = gql`
  mutation Mutation($input: AddProductInput!) {
    addProduct(input: $input) {
      name
      id
      onSale
      price
    }
  }
`;
