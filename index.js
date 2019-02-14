const express=require('express')
var file=require('fs');
file.writeFileSync('./file.js',express,'utf8');
const app=express();
file.writeFileSync('./file2.js',app,'utf8');
app.get("/", homepageHandler);

function homepageHandler(req,res) {
    res.send('Hello World')
}


app.listen(8080)