const express = require('express');
const ProductController = require('../controllers/product.controller.js');

const router = express.Router();

router.get('/:id', ProductController.getProducts);
router.post('/', ProductController.createProducts);
router.put('/:id', ProductController.updateProducts);
router.delete('/:id', ProductController.deleteProducts);


module.exports = router;
