const newMoviesJson = require('./data/new_movies.json');

module.exports = class NewMoviesDao {

    getAllNewMovies() {
        return newMoviesJson;
    }

    getNewMovieById(id) {
        for(let movie of newMoviesJson) {       
            if(movie.id === id) {
                return movie;
            }
        }

        return {error: 'Id is not found'};
    }

    getNewMovieByRatingAndPlayer(rating, player) {
        let movies = [];

        for(let i = 0; i < newMoviesJson.length; i++) {
            if(newMoviesJson[i].rating === rating) {
                let players = newMoviesJson[i].players;
                for(let j = 0; j < players.length; j++) {   //newMoviesJson[i].players.length
                    if(players[j].name === player) {
                        movies.push(newMoviesJson[i]);
                    }
                }
            }
        }
        if(movies.length === 0 ) {  //empty array
            return {error: 'No results found'};
        }
        return movies;
    }
}