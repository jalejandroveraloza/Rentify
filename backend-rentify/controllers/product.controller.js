const ProductService = require("../services/product.service.js");

// Validacao e resposta da requisição

async function createProduct(req, res, next) {
  try {
    
    await ProductService.createProduct(req.body);
    try {
      res.status(200).json({
        success: true,
        message: 'Product created successfully',
        userId: req.body.id,
      });
      res.end();
   
    } catch (err) {
      res.status(500).json({error:err});
    }


  } catch (err) {
    next(err);
  }
}

async function updateProduct(req, res, next) {
  // try {
  //   let lead = req.body;
  //   if (!lead.leadId) {
  //     throw new Error('Lead ID é obrigatório.');
  //   }
  //   await LeadService.updateLead(lead);
  //   res.end();
  //   logger.info(`PUT /lead - ${JSON.stringify(lead)}`);
  // } catch (err) {
  //   next(err);
  // }
}

async function getProducts(req, res, next) {
  try {
    res.send(await ProductService.getUsers());
  } catch (err) {
    next(err);
  }
}

async function getProduct(req, res, next) {
  try {
    res.send(await ProductService.getProduct(req.params.id));
  } catch (err) {
    next(err);
  }
}

async function deleteProduct(req, res, next) {
  try {
    res.send(await ProductService.deleteProduct(req.params.id));
  } catch (err) {
    next(err);
  }
}


module.exports = {
  createProduct,
  updateProduct,
  getProducts,
  getProduct,
  deleteProduct,
};
