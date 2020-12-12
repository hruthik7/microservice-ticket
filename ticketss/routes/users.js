var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');  
const { response } = require('../app');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



/* Process POST Form */
var urlencodedParser = bodyParser.urlencoded({ extended: false });  

router.post('/process', urlencodedParser, function (req, res) {  
   var from = req.body.from;
   var to=req.body.to;   
   var result;
   var name=req.body.name;
  if(from=='vijayawada' && to=='vishakapatnam' || from=='mumbai' && to=='delhi')
    result = 'route is available';
  else  
    result = 'route is not available';

   res.render('response',  {name : name, message: result});
  
});
router.post('/process2', urlencodedParser, function (req, res) {  
  var fname= req.body.fname; 
  var name= req.body.name;
  var result;
 if(fname=='emirates' || fname=='airindia' || fname=='jetairways' || fname=='luftansa')
   result = 'fair is 10000';
 else  
   result = 'flight not available';

   res.render('response',  {name : name, message: result});
  
});  

module.exports = router;
