// server setup
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.listen(3000, ()=>{
  console.log("App is running on port 3000");
});

// database
const Pokemon = require('./pokemon');

/*-----------------------------------------------
Unless I missed something major, I don't recall
learning static? I took a look at it, but I'm 
having trouble making sense of it, so I'm going
to omit this for now...
-----------------------------------------------*/

// index route
app.get('/pokemon', (req, res) => {
	res.render('index.ejs', {
		pokemon: Pokemon
	})
});

// show route
app.get('/pokemon/:id', (req, res) => {

	res.render('show.ejs', {
		pokemon: Pokemon[req.params.id]
	})
});

