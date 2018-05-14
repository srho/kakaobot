
exports.message_post = function(req, res){
	var user_key = req.body.user_key;
	var type = req.body.type;
	var content = req.body.content;


	var resultObject = new Object();
	var messageObject = new Object();
	var text = "";
	var isTherePhoto = false;
	var isThereLink = false;
	var isThereNextMessage = false;

	// TODO handle message data
	if(content == "HELP"){
		text = "This is kakaotalk bot demonstration";
	}else if(content == "MENU"){
		text = "1. MENU1 \n" +
			   "2. MENU2 \n" +
			   "3. MENU3 \n" +
			   "4. MENU4";
	}else if(content == "JOIN"){
		text = "Thank you for subscribe notification";
		isThereLink = true;
	}

	messageObject.text = text;

	if(isTherePhoto){
		var photoObject = new Object();

		var url = "http://t1.kakaocdn.net/kakaocorp/pw/kakao/ci_kakao.gif";
		var width = 640;
		var height = 480;

		photoObject.url = url;
		photoObject.width = width;
		photoObject.height = height;
		messageObject.photo =  photoObject;
	}

	if(isThereLink){
		var messageButtonObject = new Object();

		var label = "Google Search";
		var url = "https://www.google.com";

		messageButtonObject.label = label;
		messageButtonObject.url = url;

		messageObject.message_button = messageButtonObject;
	}

	resultObject.message = messageObject;

	if(isThereNextMessage){
		var keyboardObject = new Object();

		keyboardObject.type = "buttons";

		var buttonArray = new Array();

		buttonArray.push("ABOUT");
		buttonArray.push("HELP");
		buttonArray.push("JOIN");

		keyboardObject.buttons = buttonArray;

		resultObject.keyboard = keyboardObject;
	}

	res.json(resultObject);
}