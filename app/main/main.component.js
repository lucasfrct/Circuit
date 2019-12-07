/*
 * main.component.js 
 * Autor: Lucas Costa
 * Data: Dezewmbro de 2019
 * */

 ( ( ) => {
    "use strict";

    angular 
        .module ( "circuit" )
        .component ( "main", {
            templateUrl: "app/main/main.html",
            controller: [ "$scope", MainController ],
        } );

    function MainController ( $scope ) {
        $scope.title = "Main";

        $scope.control = {
            slider: null,
            duration: 4000,
        }
    };
    
 } ) ( );