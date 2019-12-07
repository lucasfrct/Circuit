/*
 * footer.component.js 
 * Autor: Lucas Costa
 * Data: Dezembro de 2019
 * */
( ( ) => { 
    "use strict";

    angular 
        .module ( "circuit" )
        .component ( "footer", { 
            templateUrl: "app/footer/footer.html",
            controller: [ "$scope", FooterController ],
        } );

    function FooterController ( $scope ) {
        $scope.title = "FOOTER";
    };
} ) ( );