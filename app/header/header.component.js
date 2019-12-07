/*
 * header.component.js 
 * Autor: Lucas Costa
 * Data: Dezwembor de 2019
 * */
( ( ) => {
    "use strict";

    angular 
        .module ( "circuit" )
        .component ( "header", {
            templateUrl: "app/header/header.html",
            controller: [ "$scope", HeaderController ]
        } );
    
    function HeaderController ( $scope ) {
        $scope.title = "Title";
    };

} ) ( );