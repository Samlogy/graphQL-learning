
exports.Category = {
  products: (parent, args, context) => {
    const { id: categoryId } = parent;
    return context.products.filter((product) => product.categoryId === categoryId);
  }
};
