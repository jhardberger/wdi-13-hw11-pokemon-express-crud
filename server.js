//server setup
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.listen(3000, ()=>{
  console.log("App is running on port 3000");
});

// database
const Products = require('./products');

//-------------------------------------------------//

//db route
app.get('/pokemon', (req, res) => {
	res.send(Pokemon)
});

