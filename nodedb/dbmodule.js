var databaseUrl = "mongodb://127.0.0.1:27017/mydb";
var mongojs = require("./node_modules/mongojs");
var db = mongojs(databaseUrl);
console.log("Connected to MongoDB");

exports.authenticateUser = function(Username, Password, response) {
db.users.find({ "Username": Username, "Password": Password },
	function(err, users) 
	{
		if (err || !users) {
		response.write("Not authorized user");
		response.end();
            } 
		else if (users.length == 0) {
		response.write("Not authorized user");
		response.end();
            } 
		else {
		response.write("Authorized user");
		response.end();
            }
        });
}

exports.saveUser = function(Name, Username, Email, Phno, Password, ConPassword, response) {
console.log('Saving user to mongo');
db.users.insert({ "Name": Name, "Username": Username, "Email": Email, "Phno": Phno, "Password": Password, "ConPassword": ConPassword },
function(err, saved) 
{
	if (err || !saved)
		console.log(err);
	else
		response.write("User Saved");
		response.end();
         });
}

exports.saveContact = function(CName, CSubject, CEmail, CMessage, response) {
	console.log('Saving user to mongo');
	db.contact.insert({"Name": CName, "Subject": CSubject, "Email": CEmail, "Message": CMessage },
	function(err, saved) 
	{
		if (err || !saved)
			console.log(err);
		else
			response.write("Feed Back Saved");
			response.end();
					 });
	}

	exports.storeCard = function(BankName, CardNum, Expdate, CVV, response) {
		console.log('Saving user to mongo');
		db.cardDetails.insert({"Name": BankName, "CardNumber": CardNum, "ExpiratinDate": Expdate, "CVV": CVV },
		function(err, saved) 
		{
			if (err || !saved)
				console.log(err);
			else
				response.write("Order Placed Successfully");
				response.end();
						 });
		}

		exports.cartGame = function(Gname, Gprice, response){
			db.carts.insert({"GameName": Gname, "GamePrice": Gprice},
			function(err, saved) 
			{
				if (err || !saved)
					console.log(err);
				else
					response.write("<H1>Added to Cart<H1>");
					response.end();
							});
		}
		
		exports.orderGame = function(BankName, Gname, Gprice, response){
			db.orders.insert({"Name": BankName, "GameName": Gname, "GamePrice": Gprice},
			function(err, saved) 
			{
				if (err || !saved)
					console.log(err);
				else
					response.write("<H1>Order Placed Successfully<H1>");
					response.end();
							});
		}
		