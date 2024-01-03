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

websiteController.addToCart = (req, res, next) => {
  const { product } = req.body;

  // Assuming product is a valid ObjectId
  models.Product.findOne({ _id: product })
    .then(foundProduct => {
      if (!foundProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }
      console.log('Found product', foundProduct);

      const productId = foundProduct._id;

      models.Cart.create({ items: [{ product: productId }] })
        .then(result => {
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
    })
    .catch(err => {
      console.error('Error:', err);
      next(err);
    });
};

module.exports = websiteController;
