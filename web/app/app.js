var LibApp = angular.module('LibApp', ['firebase', 'ngRoute']);

LibApp.config(function ($routeProvider) {
    $routeProvider
            .when("/", { controller: "ListController", templateUrl: "app/views/list.html" })
            .when("/movies", { controller: "ListController", templateUrl: "app/views/list.html" })
            .when("/movies/new", { controller: "AddController", templateUrl: "app/views/add.html" })
});
