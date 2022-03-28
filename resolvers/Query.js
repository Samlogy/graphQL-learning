
exports.Query = {
  hello: () => {
    return "scalar type";
  },
  products: (context) => {
    return context.products;
  },
  product: (parent, args, context) => {
    // console.log(context)
    const { id: productId } = args;
    return context.products.find((product) => product.id === productId);
  },
  categories: () => {
    return context.categories;
  },
  category: (parent, args, context) => {
    // console.log(parent, args, context)
    const { id: categoryId } = args;
    return context.categories.find((category) => category.id === categoryId);
  },
  reviews: (parent, args, context) => {
    const {id: productId} = parent
    const reviews = context.reviews
    return reviews.filter(review => review.productId === productId)
  },
};
