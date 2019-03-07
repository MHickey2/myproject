var express = require("express");

var app = express();

app.use(express.static("views"));

app.get('/', function(req,res){
 
 //res.send("hello Michelle")
  res.render("index.html")  
 console.log("this message was sent and you made an app")
    
});

app.listen(process.env.PORT || 3000, process.env.IP || "0,0,0,0", function(){
    
    console.log("well done")
    
});