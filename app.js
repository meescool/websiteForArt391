// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser")
const ejs = require('ejs');
const lodash = require("lodash");
const util = require(__dirname + '/data.js');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended:true
}));

app.get('/', function(req,res){
  const data = {
    titleName:'Home'
  }
  res.render('index', data )
});

app.get('/:pageName', function(req,res){
  const tempName = lodash.toLower(req.params.pageName);
  let data = {
    titleName:'404'
  }

  if(tempName == 'elkhornvalleymuseum') {
    let data = util.evm;
    res.render('page', data )
  } else if(tempName == 'ecolearninglegacies') {
    let data = util.ell;
    res.render('page', data )
  } else {
    res.render('404', data )
  }

});

app.listen(3000, function(){
  console.log('The server is up');
});
