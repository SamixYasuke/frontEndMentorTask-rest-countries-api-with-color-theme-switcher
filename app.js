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

app.get("/data", (req, res)=>{
  res.json(countryData)
})

app.get("/country-details/:countryName", (req, res)=>{
  const countryName = req.params.countryName;
  const filteredCountryName = countryData.filter(country => country.name === countryName);
  console.log(filteredCountryName);
  res.render("country", {
    country : filteredCountryName
  })
})

app.listen(port, ()=>{
  console.log(`The app is active on port ${port}`);
})
