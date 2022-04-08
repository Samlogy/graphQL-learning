const { v4: uuid } = require("uuid");
const fs = require('fs');
const path =require('path')

function generateRandomName(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}
function convertArrayToObject(array, key) {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, initialValue);
}

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
  },
  singleUpload: async (_, {file}) => {
    const { createReadStream, filename, mimetype, encoding } = await file;
 
    const {ext} = path.parse(filename)
    const new_filename = generateRandomName(12) + ext

    const stream = createReadStream();
    const pathName = path.join(__dirname, `../uploads/${new_filename}`)
    await stream.pipe(fs.createWriteStream(pathName))
   

    return { url: `http://localhost:4000/uploads/${new_filename}`, mimetype, encoding, filename };
  },
  multipleUpload: async (_, {file}) => {
    const baseUrl = 'http://localhost:4000/uploads/';

    const arrObjFiles = file.map(async (item) =>
     {
       let fileProps = await item;
       const { createReadStream, filename, mimetype, encoding } = fileProps;
        const stream = createReadStream();

        const {ext} = path.parse(filename)
        const new_filename = generateRandomName(12) + ext

        const pathName = path.join(__dirname, `../uploads/${new_filename}`);
        await stream.pipe(fs.createWriteStream(pathName));

        return { url: baseUrl + new_filename, filename: new_filename, mimetype, encoding }
    })

    return await Promise.all(arrObjFiles)
  },
};
