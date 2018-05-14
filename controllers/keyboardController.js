//var Genre = require('../models/genre');

exports.keyboard_list = function(req, res){
	var resultObject = new Object();

	resultObject.type = "buttons";

	// Button keyboard
	var buttonArray = new Array();

	buttonArray.push("HELP");
	buttonArray.push("JOIN");
	buttonArray.push("MENU");

	resultObject.buttons = buttonArray;

	res.json(resultObject);
};