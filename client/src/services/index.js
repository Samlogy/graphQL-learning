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
export const EDIT_PRODUCT = gql`
  mutation Mutation($updateProductId: ID!, $input: UpdateProductInput!) {
    updateProduct(id: $updateProductId, input: $input) {
      name
      price
      description
      quantity
      image
      onSale
      categoryId
      id
    }
  }
`;
export const DELETE_PRODUCT = gql`
  mutation Mutation($deleteProductId: ID!) {
    deleteProduct(id: $deleteProductId)
  }
`;

export const SINGLE_UPLOAD = gql`
  mutation($file: Upload!) {
    singleUpload(file: $file) {
      filename
      mimetype
      encoding
      url
    }
  }
`;
export const MULTIPLE_UPLOAD = gql`
  mutation($file: [Upload!]!) {
    multipleUpload(file: $file) {
      filename
      mimetype
      encoding
      url
    }
  }
`;