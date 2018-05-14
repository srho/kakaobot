var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

var keyboard_controller = require('../controllers/keyboardController');
router.get('/', keyboard_controller.keyboard_list);

module.exports = router;
