const express=require('express')
const app=express();

app.get("/", homepageHandler);

function homepageHandler(req,res) {
    res.send('Hello World')
}


app.listen(8080)