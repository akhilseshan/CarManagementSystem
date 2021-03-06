var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Car Service Management System'
  });
});

router.get('/book', function(req,res,next){
  res.render('book',{
    title: 'Book'
  });
});

router.get('/status', function(req,res,next){
  res.render('status',{
    title: 'Status'
  });
});

module.exports = router;
