var express    = require("express");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'training'
});
var app = express();

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log("Error connecting database ... nn");    
}
});

app.get("/vignesh",function(req,res){
connection.query('SELECT * from userregister', function(err, rows, fields) {
connection.end();
  if (!err){
    // console.log('The solution is: ', fields);
    res.json(fields);
  }
  else{
    console.log('Error while performing Query.');
  }
  });
});

app.listen(3000);

