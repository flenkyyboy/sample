var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  
});

router.post('/submit',(req,res)=>{
  console.log(req.body)
  MongoClient.connect("mongodb://localhost:27017",function(err,client){
    if(err)
      console.log('not connected')
    else
      client.db('rameez').collection('user').insertOne(req.body)
    
  })

res.send('Got')

  })
module.exports = router;
