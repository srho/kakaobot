var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

var message_controller = require('../controllers/messageController');
router.post('/', message_controller.message_post);

module.exports = router;
