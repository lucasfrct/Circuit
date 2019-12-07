/*
* sidenav.directive.js 
* Autor: Lucas Costa
* Data: Novembro de 2019
*/
( ( ) => {
	"use strict";

	angular
		.module ( "circuit" )
		.directive ( "sidenav", SidenavDirective );

	function SidenavDirective ( ) {
		return {
			restrict: "A",
			scope: {
				sidenavInstanne: "=sidenav",
			},
			link: SidenavInit,
		}
	};

	function SidenavInit ( $scope, $element, $attr ) {
		$scope.sidenavInstanne = M.Sidenav.init ( $element [ 0 ], { edge: "left", preventScrolling: true } );
	};

} ) ( );