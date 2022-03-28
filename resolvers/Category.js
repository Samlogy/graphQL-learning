
exports.Category = {
  products: (parent, args, context) => {
    // console.log(parent)
    // list of products with categoryId
    const { id: categoryId } = parent;
    return context.products.filter((product) => product.categoryId === categoryId);
  },
};
