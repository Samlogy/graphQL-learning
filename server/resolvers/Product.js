exports.Product = {
  reviews: (parent, args, context) => {
    const { id: productId } = parent;
    const { reviews } = context;
    return reviews.filter((review) => review.productId === productId);
  },
  review: (parent, args, context) => {
    const { id: productId } = parent;
    const { id: reviewId } = args;
    const { reviews } = context;

    const reviewList = reviews.filter((review) => review.productId === productId);
    return reviewList.find((review) => review.id === reviewId);
  },
};
