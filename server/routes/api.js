const express = require('express');
const router = express.Router();
const controller = require('../controllers/websiteController.js');
const upload = require('../middleware/upload.js');
const websiteController = require('../controllers/websiteController.js');

// A call to /api.
router.get('/', controller.getCars, (req, res) => res.status(200).json(res.locals.data));

router.post('/car', upload.single('image'), controller.createCar, (req, res) => {
  res.status(200).json(res.locals.newCar);
});

// Adding items to cart

router.post('/cart', websiteController.addToCart, (req, res) => {
  res.status(200).json(res.locals.result);
});

module.exports = router;
