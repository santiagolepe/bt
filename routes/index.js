// ALL ROUTES (get, post, put, delete, etc)

var indexController = require('../controllers/indexController');

module.exports = function(app){

	//index routes
	app.get('/', indexController.index.bind(indexController));
}