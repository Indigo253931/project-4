var Product = require('../models/product');
// GET
var getAll = function (request, response) {
  Product.find(function(error, products) {
      console.log(products);
    if(error) {
      response.status(400).json({message: 'Could not find any products'});
    } else {
      response.json({products: products});
    }
  });
  console.log('done');
};
// GET
var getProduct = function (request, response) {
  var id = request.params.id;

  Product.findById({_id: id}, function(error, product) {
    if(error) {
      response.status(400).json({message: 'Could not find product b/c:' + error});
    } else {
      response.json({product: product});
    }
  });
};
// POST
var createProduct = function (request, response) {
  console.log('in POST');
  console.log('body:',request.body);
  var product = new Product(request.body);
  product.save(function(error) {
    if(error) { 
      response.status(400).json({messsage: 'Could not create product b/c:' + error});
    } else {
    response.json({product: product});
    }
  });
};

var updateProduct = function (request, response) {
  // var id = request.params.id;
  // Product.findById({_id: id}, function(error, product) {
  //   if(error) response.json({message: 'Could not find product b/c:' + error});
  //   if(request.body.sector) product.sector = request.body.sector;
  //   if(request.body.industry) product.industry = request.body.industry;
  //   if(request.body.company_name) product.company_name = request.body.company_name;
  //   if(request.body.product_name) product.product_name = request.body.product;
  //   if(request.body.comments) product.comments = request.body.comments;
  //   if(request.body.image) product.image = request.body.image;
  //   product.save(function(error) {
  //     if(error) {
  //       response.status(400).json({messsage: 'Could not update product b/c:' + error});
  //     } else {
  //     response.json({message: 'Product successfully updated', product: product});
  //     }
  //   });
  // });

};
var removeProduct = function (request, response) {
  var id = request.params.id;

  Product.remove({_id: id}, function(error) {
    if(error) {
      response.status(400).json({message: 'Could not delete product b/c:' + error});
    } else {
    response.json({message: 'Product successfully deleted'});
  }
  });
};
module.exports = {
  getAll: getAll,
  createProduct: createProduct,
  getProduct: getProduct,
  updateProduct: updateProduct,
  removeProduct: removeProduct
};