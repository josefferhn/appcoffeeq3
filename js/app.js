// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'App Framework7',
	panel: {
		swipe: true,
	},
  	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/categories/',
    	url: 'categories.html',
    	name: 'categories',
  		},
		{
		path: '/hot-coffees/',
    	url: 'hot-coffees.html',
    	name: 'hot-coffees',
  		},
		{
		path: '/cold-coffees/',
    	url: 'cold-coffees.html',
    	name: 'cold-coffees',
  		},
		{
		path: '/product/',
    	url: 'product.html',
    	name: 'product',
  		},
		{
		path: '/americano/',
    	url: 'americano.html',
    	name: 'americano',
  		}
		
	],
	dialog: {
		title: 'Coffee App',
		buttonOk: 'Aceptar',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});



$$('#btnLogin').on('click', function (e) {
	e.preventDefault();
	
	var $valid = $$('#form-login')[0].checkValidity();
	if ($valid){
        $$('#form-login').trigger('reset');	
        app.loginScreen.close('#modal-login');
		
		app.dialog.alert('¡ Bienvenido a la APP !');
    }
	
});



$$(document).on('click', '#btnAddToCart', function (e) {
	e.preventDefault();

	
	app.dialog.confirm('¿Seguro desea agregar este producto?', function () {
		
		//app.dialog.alert('Great!');
		
		var notification = app.notification.create({
		  icon: '<i class="material-icons">check</i>',
		  title: 'Order',
		  titleRightText: '',
		  subtitle: '',
		  text: "Su producto ha sido agregado al carrito correctamente",
		  closeTimeout: 3000,
		});
		notification.open();
		
		//redirect
		app.views.main.router.navigate('/categories/');
		
	});
	
	

	
});





