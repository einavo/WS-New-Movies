const express = require('express'),
      bodyParser = require('body-parser'),
      app     = express(),
      port    = process.env.PORT || 3000,
      NewMoviesDao = require('./new_movies/NewMoviesDao');


app.use(bodyParser.urlencoded({extended: true}));   //For parsing POST requests

//============================================

const newMoviesDao = new NewMoviesDao();

app.get('/getAllNewMovies', 
    (req, res) => {
    let movies = newMoviesDao.getAllNewMovies();
    res.json(movies);
});

app.post('/getNewMovieById', function(req, res) {
    let id = +(req.body.id);  
    let movie = newMoviesDao.getNewMovieById(id);
    res.json(movie);
});

app.get('/getNewMovieByRatingAndPlayer', function(req, res) {
    let rating = +(req.query.rating);
    let player = req.query.player;
    let movies = newMoviesDao.getNewMovieByRatingAndPlayer(rating, player);
    res.json(movies);
});

app.all('*', function(req, res) {
    res.json({error: 'Route does not exists'});
});

//============================================

app.listen(port, function() {
    console.log(`Server is listening to ${port}`);
});      