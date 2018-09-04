const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.json());

/*
 *  Einfache Antwort auf get
 */

 let counter = 0;

app.route(["/greeting/:name","/greeting/"]).get((req, res, next) => {

    let name = req.params.name;
    let template;
    counter = counter +1;

    if (name != null) {
        template = "Hello, "+name;
    } else {
        template = "Hello, World";
    }
    
    
    let aws= `{"Anfrage": `+ counter +`,
               "Content": "`+ template +`" }`;
    
    
    
    res.send(aws);
});

app.route(["/farewell/:name","/farewell/"]).get((req, res, next) => {

    let name = req.params.name;
    let template;
    counter = counter +1;

    if (name != null) {
        template = "Good Bye, "+name;
    } else {
        template = "Good Bye, World";
    }
    
    
    let aws= `{"Anfrage": `+ counter +`,
               "Content": "`+ template +`" }`;
    
    
    
    res.send(aws);
});

app.route("/calc/").get((req, res, next) => {

    let number1 = parseInt(req.query.number1);
    let number2 = parseInt(req.query.number2);
    let sum = number1 + number2;

    counter = counter +1;
    
    
    let aws= `{"Anfrage": `+ counter +`,
               "Number 1": `+ number1 +`,
               "Number 2": `+ number2 +`,
               "Sum": `+ sum +` }`;
    
    
    
    res.send(aws);
});

"use strict";

app.listen(3000, function() {
	console.log("listening");
});