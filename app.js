// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser")
const ejs = require('ejs');
const lodash = require("lodash");
const util = require(__dirname + '/data.js');

const app = express();


const data = {
  titleName:'Home',
  theme: 'night',
  url: '/'
}

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended:true
}));

app.use(express.static('public'));


app.get('/', function(req,res){
  data.titleName='Home'
  data.url='/'
  console.log(data.theme);

  res.render('index', data )
});

/**
 * This post method is for handling user requests when clicking on the
 * day or night theme buttons.
**/
app.post('/', function(req,res){
  // use lodash to split the value into it's respective variables
  const temp = lodash.split(req.body.themeType,',',2);
  data.url = temp[0];
  data.theme = temp[1];
  console.log(data.theme);
  if(temp[0] == '/'){
    res.redirect('/');
  }
  else{
    res.redirect('/'+ data.url)
  }

});

app.get('/:pageName', function(req,res){

  const tempName = lodash.toLower(req.params.pageName);
  data.titleName = '404';
  data.url = '404'
  const tempTheme = data.theme;
  if(tempName == 'elkhornvalleymuseum') {
    let data = util.evm;
    data.theme = tempTheme;
    console.log(data.theme);
    res.render('page', data )
  } else if(tempName == 'ecolearninglegacies') {
    let data = util.ell;
    data.theme = tempTheme;
    console.log(data.theme);
    res.render('page', data )
  } else {
    res.render('404', data )
  }

});

app.listen(3000, function(){
  console.log('The server is up');
});
