describe('Movie list', function () {
    var controller, scope;

    var FirebaseServiceMock;

    beforeEach(function () {
        // Lisää moduulisi nimi tähän
        module('LibApp');

        FirebaseServiceMock = (function () {
            var movies = [
                {
                    title: "First",
                    released: 1234,
                    director: "First Director",
                    description: "First description"
                },
                {
                    title: "Second",
                    released: 4321,
                    director: "Second Director",
                    description: "Second description"
                }
            ];
            return {
                // Toteuta FirebaseServicen mockatut metodit tähän
                addMovie: function(movie) {
                    movies.push(movie);
                },
                
                getMovies: function() {
                    return movies;
                }
            };
        })();

        // Lisää vakoilijat
        spyOn(FirebaseServiceMock, 'addMovie').and.callThrough();
        spyOn(FirebaseServiceMock, 'getMovies').and.callThrough();

        // Injektoi toteuttamasi kontrolleri tähän
        inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            // Muista vaihtaa oikea kontrollerin nimi!
            controller = $controller('ListController', {
                $scope: scope,
                FirebaseService: FirebaseServiceMock
            });
        });
    });

    /*
     * Testaa alla esitettyjä toimintoja kontrollerissasi
     */

    /*
     * Testaa, että Firebasesta (mockilta) saadut elokuvat löytyvät konrollerista
     * Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
     * käyttämällä toBeCalled-oletusta.
     */
    it('should list all movies from the Firebase', function () {
        expect(FirebaseServiceMock.getMovies).toHaveBeenCalled();
        expect(scope.movies.length).toBe(2);
        expect(scope.movies[0].title).toBe("First");
        expect(scope.movies[1].title).toBe("Second");
    });

    /* 
     * Testaa, että elokuvan pystyy poistamaan Firebasesta.
     * Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
     * käyttämällä toBeCalled-oletusta.
     */
    it('should be able to remove a movie', function () {
        expect(true).toBe(false);
    });
});