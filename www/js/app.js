(function(){

		var gem= {
			name: 'Azurita',
			precio:'2.95',
			canPurchase: false,
			soldOut: true,
			description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat distinctio accusamus in quos laboriosam, quasi eius inventore minus, nihil molestias quo nemo, deleniti illum aut necessitatibus velit odio! Veritatis, harum.'
		};
		var gems=[	
		{
			name: 'Rupia Verde',
			precio:1,
			canPurchase: false,
			description:'No te acompletas nada chavo',
			soldOut: true,
			images: [
			{id:0,url:'img/gem-01.gif'},
			{id:1,url:'img/gem-02.gif'},
			{id:2,url:'img/gem-03.gif'}
			],
			reviews: [
				{stars: 5, body: "I love this Product", author:'shepniel@gmail.com'},
				{stars: 5, body: "I love this Product", author:'shepniel@gmail.com'}

			]
			
		},
		{
		name: 'Rupia Roja',
			precio:20,
			canPurchase: false, 
			description:'Hay la llevas para unas flechas',	
			soldOut: true,
			images: [
			{id:0,url:'img/gem-04.gif'},
			{id:1,url:'img/gem-05.gif'},
			{id:2,url:'img/gem-06.gif'}
			],
			reviews: [
				{stars: 5, body: "I love this Product", author:'shepniel@gmail.com'},
				{stars: 5, body: "I love this Product", author:'shepniel@gmail.com'}

			]
		},
		{name: 'Rupia Azul',
			precio:5,
			canPurchase: false,
			description:'Puro deku nuts perro',
			soldOut: true,
			images: [
			{id:0,url:'img/gem-07.gif'},
			{id:1,url:'img/gem-08.gif'},
			{id:2,url:'img/gem-09.gif'}
	],
	reviews: [
		{stars: 5, body: "I love this Product", author:'shepniel@gmail.com'},
		{stars: 5, body: "I love this Product", author:'shepniel@gmail.com'}

	]
			
		}];

		var app = angular.module('gemStore',['store-products']);

		app.controller('StoreController', function(){

			this.products=gems;
		});

		app.controller('PanelController',function(){
			this.tab = 1;
			this.selectTab = function(setTab){
				this.tab = setTab;
			};
			this.isSelected = function(checkTab){
				return this.tab === checkTab;
			};
		});

		app.controller('ReviewsController',function(){
			this.review = {};
			this.addReview = function(product){
				product.reviews.push(this.review);
				this.review = {};
			}

			});

		app.controller('GalleryController',function(){
				this.current = 0;
				
				this.setCurrent = function(imageNumber){
					this.current = imageNumber || 0;
				}
		});
		// app.directive('productTitle',function(){
		// 	return{
		// 		restrict: 'E',
		// 		templateUrl: 'product-title.html'
		// 	};
		// });

	
			 
})();
