const mongoose = require('mongoose');
require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'm2MachineShop'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;
// used to create a schema for MongoDB documents.
const customerSchema = new Schema({
  name: String,
  phone: Number
});

const Customer = mongoose.model('customer', customerSchema);

const productSchema = new Schema({
  name: String,
  price: Number,
  model: String,
  make: String,
  year: Number,
  color: String,
  image: String
});

const Product = mongoose.model('product', productSchema);

const saleSchema = new Schema({
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'customer'
  },
  items: [{
    // ref to the product document
    product: {
      type: Schema.Types.ObjectId,
      ref: 'product'
    }
  }],
  totalAmount: Number,
  saleDate: {
    type: Date,
    default: Date.now
  }
});

const Sale = mongoose.model('sale', saleSchema);

const cartSchema = new Schema({
  items: [{
    // ref to the product document
    product: {
      type: Schema.Types.ObjectId,
      ref: 'product'
    }
  }],
  totalAmount: Number
});

const Cart = mongoose.model('cart', cartSchema);

module.exports = {
  Customer,
  Product,
  Sale,
  Cart
};
