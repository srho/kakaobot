var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

const checkUserKey = (req, res, next)=>{
  if (req.method == 'DELETE' && req.params.user_key !== undefined){
  	next();
  } else if(req.body.user_key !== undefined){
    next();
  } else {
    res.status(400).json({ "error": "user_key is undefined" });
  }
};


router.post('/', checkUserKey, function(req, res, next) {
	var user_key = req.body.user_key;

	res.json({"status": "success"});

});

router.delete('/:user_key', checkUserKey,function(req, res, next) {
	var user_key = req.params.user_key;

	res.json({"status": "success"});
});

module.exports = router;
