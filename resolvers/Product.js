
exports.Product = {
  category: (parent, args, context) => {
    // console.log(parent)
    const { categoryId } = parent;
    return context.categories.find((category) => category.id === categoryId);
  },
};
