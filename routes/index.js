var express = require('express');
var router = express.Router();
var fs = require('fs');

fs.readFile('./db/structure.JSON', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
});

router.get('/', function(req, res, next) {
    res.render('index', { page: obj.page, pagina: "index" });
});

module.exports = router;
