var express = require('express');
var router = express.Router();
var fs = require('fs');
var Producto = require('../db/schemas/productos');

fs.readFile('./db/structure.JSON', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
});

router.get('/', function(req, res, next) {
    res.render('index', { page: obj.page, pagina: "productos" }); 
});

router.get('/listas', function(req, res, next) {
  Producto.find().exec(function(err, productos) {
      if (err) throw err;
      res.render('index', { page: obj.page, pagina: "productoslista", productos: productos }); 
  });
});

router.get('/agregar', function(req, res, next) {
  Producto.find().exec(function(err, productos) {
      if (err) throw err;
      res.render('index', { page: obj.page, pagina: "productosagregar", productos: productos }); 
  });
});

router.post('/agregar', function(req, res, next) {
  console.log(req.body);
  var articulo = new Producto({ name: req.body.productoNombre, cost: req.body.productoCosto });
  articulo.save(function (err) {
    if (err) return handleError(err);
    res.redirect('./listas');
  });
});

module.exports = router;
