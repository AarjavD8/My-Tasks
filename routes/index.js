var express = require('express');
var router = express.Router();
var db = require('./db');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.find({},function (err, data) {
    res.render('index', {data: data});
  })
  
});


router.post('/submit', function(req, res) {
  console.log(req.body.task);
  db.create({
    task: req.body.task,
  });
  res.redirect('/')
});
router.get('/delete/:id', function(req, res){
  var id = req.params.id;
  db.findByIdAndDelete(id, function(err){
    res.redirect('/')
  })
})
router.get('/edit/:id', function(req, res){
  var id = req.params.id;
  db.find({},function (err, data) {
    res.render('update', {data: data, id: id});
  })
})
router.post('/edit/:id', function(req, res){
  var id = req.params.id;
  db.findByIdAndUpdate(id, {task: req.body.updVal}, function(err){
    res.redirect('/')
  })
})
module.exports = router;
