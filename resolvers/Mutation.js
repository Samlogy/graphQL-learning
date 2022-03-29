const { v4: uuid } = require("uuid");

exports.Mutation = {
  addCategory: (parent, args, context) => {
    const { name } = args.input;
    const { categories } = context;

    const newCategory = {
      id: uuid(),
      name,
    };

    categories.push(newCategory);
    return newCategory;
  },
  addProduct: (parent, args, context) => {
    let newProduct = args.input;
    const { products } = context;

    newProduct = {
      id: uuid(),
      ...newProduct,
    };

    products.push(newProduct);
    return newProduct;
  },
  deleteCategory: (parent, args, context) => {
    const { id: categoryId } = args;
    const { categories, products } = context;

    const newCategories = categories.filter((category) => category.id !== categoryId);

    const newProducts = products.map((product) => {
      if (product.categoryId === categoryId)
        return {
          ...product,
          categoryId: null,
        };
      else return product;
    });
    return true;
  },
  deleteProduct: (parent, args, context) => {
    const { id: productId } = args;
    const { products, reviews } = context;

    const newProducts = products.filter((product) => product.id !== productId);
    const newReviews = products.filter((review) => review.productId !== productId);

    return true;
  },
  updateCategory: (parent, args, context) => {
    const { id: categoryId, input } = args;
    const { categories } = context;

    let updatedCategory = {};

    const newCategories = categories.map((category) => {
      if (category.id === categoryId) {
        return updatedCategory = {
            id: categoryId,
            name: input.name,
        }
      }
    });
    return updatedCategory;
  },
  updateProduct: (parent, args, context) => {
    const { id: productId, input } = args;
    const { products } = context;

    const index = products.findIndex((product) => product.id === productId);
    if (index === -1) return null;
    products[index] = {
      ...products[index],
      ...input,
    };
    return products[index];
  }
};
