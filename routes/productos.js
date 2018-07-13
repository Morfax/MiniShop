var express = require('express');
var router = express.Router();
var fs = require('fs');
var Producto = require('../db/schemas/productos');

fs.readFile('./db/structure.JSON', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
});

router.get('/', function(req, res, next) {
  Producto.find().exec(function(err, productos) {
      if (err) throw err;
      res.render('index', { page: obj.page, pagina: "productos", productos: productos }); 
  });
});

module.exports = router;
