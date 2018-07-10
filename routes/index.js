var express = require('express');
var router = express.Router();
var fs = require('fs');
var Producto = require('../db/schemas/productos');

/* GET home page. */
router.get('/', function(req, res, next) {
  var obj;
  fs.readFile('./db/test.JSON', 'utf8', function (err, data) {
    if (err) throw err;
    Producto.find({}, function(err, productos) {
      if (err) throw err;
      obj = JSON.parse(data);
      res.render('index', { title: obj.page.title, conten: productos, menus: obj.page.menus, pagina: "index" });
    });
  });
});

router.get('/productos', function(req, res, next) {
  var obj;
  fs.readFile('./db/test.JSON', 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
    res.render('index', { title: obj.page.title, conten: obj.page.conten, menus: obj.page.menus, productos: obj.page.productos, pagina: "productos" });
  });
});

module.exports = router;
