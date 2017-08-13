var express=require('express');

var app=express();

//This lets you add functionality to your app.
//Contains folder name to be exposed to Web server
app.use(express.static('public'));

//Start server using app listen
app.listen(3000,function(){ console.log("Express server is up on port 3k")})