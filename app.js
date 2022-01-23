//requiring our modules express, body-parser,ejs, mongoose,querystring
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
// const { stringify } = require("querystring");

//express app
const app = express();

//mongodb connection
mongoose.connect('mongodb://localhost:27017/wikiDB', { useNewUrlParser: true });

//ejs app
app.set('view engine', 'ejs');

//body-parser explicit code
app.use(bodyParser.urlencoded({
    extended: true
}));

//static files in public folder
app.use(express.static("public"));

//mongoose schems
const articleSchema = ({
    title: String,
    content: String
});

//mongoose model
const articleModel = mongoose.model("article", articleSchema);

//get articles route
app.get("/articles", function(req, res) {
    //get = read
    articleModel.find(function(err, foundArticles) {
        if (!err) {
            res.send(foundArticles);
        } else {
            res.send(err);
        }
    });
});


//post article route
app.post("/articles", function(req, res) {
    //post = create
    const newArticle = new articleModel({
        //use postman for keys as title and name 
        title: (req.body.title),
        content: (req.body.content)
    });
    newArticle.save(function(err) {
        if (!err) {
            res.send("successfully added a new article")
        } else {
            res.send(err);
        }
    });
});

//server port
app.listen(3000, function() {
    console.log("Server started on port 3000");
});