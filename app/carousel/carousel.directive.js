/*
* carrousel.directive.js
* Autor: Lucas Costa
* Data: Novembro de 2019
*/
( ( ) => { 
	"use strict";
	angular
		.module ( "circuit" )
		.directive ( 'carousel', [ CarouselDirective ] );

	function CarouselDirective ( ) {
		return {
			restrict: "A",
			scope: {
				carouselInstance: "=carousel",
				duration: "=duration",
			},
			link: CarouselInit,
		};
	};

	function CarouselInit ( $scope, $element ) {
		
		$scope.carouselInstance = M.Carousel.init ( $element [ 0 ], { fullWidth: true, indicators: true, } );

		if ( $scope.duration >= 1 ) {
			setInterval( ( ) => {
				$scope.carouselInstance.next ( );
			}, $scope.duration );
		};

	};

} ) ( );