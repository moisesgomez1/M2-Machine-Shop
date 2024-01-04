// Controller file where an object of middleware functions can be found.
const { model } = require('mongoose');
const models = require('../models/websiteModels.js');
// customer, product, sale, cart

const websiteController = {};

websiteController.getCars = (req, res, next) => {
  models.Product.find({}).exec()
    .then(data => {
      console.log(data);
      // creating a property in the res.locals object called data. Available in the req/res cycle.
      res.locals.data = data;
      // invoking next tells the middleware chain to move to the next function in the chain.
      return next();
    })
    .catch(err => next(err));
};

websiteController.createCar = (req, res, next) => {
  const { name, price, model, make, year, color } = req.body;
  let image;
  if (req.file) {
    image = req.file.path;
  }
  models.Product.create({ name, price, model, make, year, color, image })
    .then(result => {
      console.log(result);
      res.locals.newCar = 'create new car successfully ' + result;
      return next();
    })
    .catch(err => next(err));
};

// missing modularity in this? perhaps you can split this into two isolated middlewares. 
websiteController.addToCart = (req, res, next) => {
  const { product } = req.body;
  const { cartId } = req.body;

  // Assuming product is a valid ObjectId
  models.Product.findOne({ _id: product })
    .then(foundProduct => {
      if (!foundProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }
      console.log('Found product', foundProduct);

      const productId = foundProduct._id;

      models.Cart.findById(cartId).exec()
        .then(cart => {
          if (!cart) {
            // If the cart doesn't exist, create a new cart with the product
            models.Cart.create({ items: [{ product: productId }] })
              .then(result => {
                res.locals.cartId = result._id;
                return models.Cart.populate(result, { path: 'product' });
              })
              .then(populatedResult => {
                console.log('Result we get back from populating:', populatedResult);
                res.locals.result = populatedResult;
                return next();
              })
              .catch(err => {
                console.error('Error:', err);
                next(err);
              });
          } else {
            // If the cart exists, push the product into the items array
            cart.items.push({ product: productId });
            return cart.save()
              .then(updatedCart => models.Cart.populate(updatedCart, { path: 'product' }))
              .then(populatedCart => {
                console.log('Updated cart:', populatedCart);
                res.locals.result = populatedCart;
                return next();
              });
          }
        })
        .catch(err => {
          console.error('Error:', err);
          next(err);
        });
    })
    .catch(err => {
      console.error('Error:', err);
      next(err);
    });
};

// get request

websiteController.getCart = (req, res, next) => {
  models.Cart.find({}).exec()
    .then(result => {
      console.log('result from cart query ', result);
      res.locals.cart = result;
      return next();
    })
    .catch(err => {
      console.error('Error:', err);
      next(err);
    });
};
module.exports = websiteController;
