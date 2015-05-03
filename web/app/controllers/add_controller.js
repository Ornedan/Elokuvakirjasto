LibApp.controller('AddController', function ($scope, $location, FirebaseService) {
    $scope.add = function () {
        if(!$scope.title === "" || $scope.released === "" || $scope.director === "" || $scope.description === "")
            return;

        FirebaseService.addMovie({
            title: $scope.title,
            released: parseInt($scope.released),
            director: $scope.director,
            description: $scope.description
        });

        $location.path("/movies");
    };
});