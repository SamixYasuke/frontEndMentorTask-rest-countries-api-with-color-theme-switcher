const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const countryData = require("./data.json");
const app= express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));

app.set("view engine", "ejs");

app.get("/", (req, res)=>{
  res.render("index", {
    countryData : countryData
  });
});


app.get("/country", (req, res)=>{
  res.render("country", {
    countryData : countryData
  });
})

app.listen(port, ()=>{
  console.log(`The app is active on port ${port}`);
})