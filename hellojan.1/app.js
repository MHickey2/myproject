var express = require ("express"); //this line calls the express framework to action
//invoke the express package into action from here
var app = express();
//******never write anything above the express call line*************

//set up a simple call to a url to display a message to us

//call the access to the views folder and allow content to be rendered
app.use(express.static("views"));

app.use(express.static("script"));
app.use(express.static("images"));

app.get('/', function(req, res){//this line will call a get request on the / url of application
  //now we need the function to actually do something  
    //res.send("Hello January Class");//will send a string response to the browser
    res.render("index.html")
    //we should get into habit of keeping track of our progress
    
    console.log("the message was sent and you made an app");
});

//now we set up a way for our application to run when we need it to

//***never write below this line***




app.listen(process.env.PORT || 3000,process.env.IP || "0.0.0.0", function(){

console.log("well done! Your first app is now live")

});

