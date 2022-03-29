function filterCategoryProducts(products, categoryId, filter) {
  const categoryProducts = products.filter((product) => product.categoryId === categoryId);
  let filteredCategoryProducts = categoryProducts;

  if (filter) {
    if (filter.onSale) {
      filteredCategoryProducts = filteredCategoryProducts.filter((product) => {
        return product.onSale;
      });
    }
  }

  return filteredCategoryProducts;
}

exports.Category = {
  products: (parent, args, context) => {
    const { id: categoryId } = parent;
    const { filter } = args;
    const { products } = context;

    return filterCategoryProducts(products, categoryId, filter)
    // return context.products.filter((product) => product.categoryId === categoryId);
  },
};
