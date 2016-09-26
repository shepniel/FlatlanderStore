(function(){
	var app = angular.module('store-products',[]);

		app.directive('productTitle',function(){
			return{
				restrict: 'A',
				templateUrl: 'product-title.html'
			};
		});

		app.directive('productPanels',function(){
				return{
					restrict: 'E',
					templateUrl: 'product-panels.html',
					controller: function(){
						this.tab = 1;
								this.selectTab = function(setTab){
									this.tab = setTab;
								};
								this.isSelected = function(checkTab){
									return this.tab === checkTab;
								};
				
					},
					controllerAs:'panel'
				}
		});

		app.directive('reviewsDirective',function(){
			return{
				restrict:'E',
				templateUrl: 'reviews.html',
				controller: function(){
					this.review = {};
					this.addReview = function(product){
					product.reviews.push(this.review);
					this.review = {};
			}

				},
				controllerAs: 'reviewsCtrl'
			}
		});

})();