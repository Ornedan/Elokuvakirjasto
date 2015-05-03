LibApp.service('FirebaseService', function($firebase){
    var movieRef = new Firebase('https://glowing-fire-1871.firebaseio.com/movies');
    var movieSync = $firebase(movieRef);
    var movies = movieSync.$asArray();
    
    this.getMovies = function() {
        return movies;
    };
    
    this.addMovie = function(movie) {
        movies.$add(movie);
    };
});
