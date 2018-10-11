// server setup--------------------------------------//

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// database------------------------------------------//

const Pokemon = require('./pokemon');

// middleware----------------------------------------//

app.use(bodyParser.urlencoded({extended: false}));

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

//listener-------------------------------------------//

app.listen(3000, ()=>{
  console.log("App is running on port 3000");
});

//routes---------------------------------------------//

// new route get
app.get('/pokemon/new', (req, res) => {
	res.render('new.ejs')
});

// new route post
app.post('/pokemon', (req, res) => {
	Pokemon.push(req.body)
	res.redirect('/pokemon')
});

// index route
app.get('/pokemon', (req, res) => {
	res.render('index.ejs', {
		pokemon: Pokemon
	})
});

// show route
app.get('/pokemon/:id', (req, res) => {
	res.render('show.ejs', {
		pokemon: Pokemon[req.params.id],
		id: [req.params.id]
	})
});

// edit route get
app.get('/pokemon/:id/edit', (req, res) => {
	res.render('edit.ejs', {
		pokemon: Pokemon[req.params.id],
		id: req.params.id
	})
});
// edit route put
app.put('/pokemon/:id', (req, res) => {
	Pokemon[req.params.id] = req.body;
	res.redirect('/pokemon/' + [req.params.id])
});

// DETEL route
app.delete('/pokemon/:id', (req, res) => {
	Pokemon.splice(req.params.id, 1)
	res.redirect('/pokemon')
});

