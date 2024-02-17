var module = require('./dbmodule');
var url = require('url');
var querystring = require('querystring');
var http = require('http');

http.createServer(function(request, response) {
var data1 = '';

request.on('data', function(chunk) {
            data1 += chunk;
        });

request.on('end', function() {
var Name = querystring.parse(data1)["Name"];
console.log(Name);
var Username = querystring.parse(data1)["Username"];
console.log(Username);
var Email = querystring.parse(data1)["Email"];
console.log(Email);
var Phno = querystring.parse(data1)["Phno"];
console.log(Phno);
var Password = querystring.parse(data1)["Password"];
console.log(Password);
var ConPassword = querystring.parse(data1)["ConPassword"];
console.log(ConPassword);
var CName = querystring.parse(data1)["CName"];
console.log(CName);
var CSubject = querystring.parse(data1)["CSubject"];
console.log(CSubject);
var CEmail = querystring.parse(data1)["CEmail"];
console.log(CEmail);
var CMessage = querystring.parse(data1)["CMessage"];
console.log(CMessage);
var BankName = querystring.parse(data1)["BankName"];
console.log(BankName);
var CardNum = querystring.parse(data1)["CardNum"];
console.log(CardNum);
var Expdate = querystring.parse(data1)["Expdate"];
console.log(Expdate);
var CVV = querystring.parse(data1)["CVV"];
console.log(CVV);

if (request.url === '/login') {
module.authenticateUser(Username, Password, response);
            } 
else if (request.url === '/save') {
module.saveUser(Name, Username, Email, Phno, Password, ConPassword, response);
            } 
else if (request.url === '/contact')
{
      module.saveContact(CName, CSubject, CEmail, CMessage, response);
}
else if (request.url === '/orderRDR')
{
      module.storeCard(BankName, CardNum, Expdate, CVV, response);
      module.orderGame(BankName, 'Red Dead Redemption 2', '3499', response);
}

else if (request.url === '/orderRDRU')
{
      module.storeCard(BankName, CardNum, Expdate, CVV, response);
      module.orderGame(BankName, 'Red Dead Redemption 2: Ultimate Edition', '5499', response);
}

else if (request.url === '/orderRDO')
{
      module.storeCard(BankName, CardNum, Expdate, CVV, response);
      module.orderGame(BankName, 'Red Dead Online', '999', response);
}

else if (request.url === '/orderForbiddenWest')
{
      module.storeCard(BankName, CardNum, Expdate, CVV, response);
      module.orderGame(BankName, 'Horizon Forbidden West', '5599', response);
}

else if (request.url === '/orderGTAV')
{
      module.storeCard(BankName, CardNum, Expdate, CVV, response);
      module.orderGame(BankName, 'Grand Theft Auto V', '2049', response);
}

else if (request.url === '/orderGTAVP')
{
      module.storeCard(BankName, CardNum, Expdate, CVV, response);
      module.orderGame(BankName, 'Grand Theft Auto V: Premium Edition', '3499', response);
}

else if (request.url === '/orderCyberpunk')
{
      module.storeCard(BankName, CardNum, Expdate, CVV, response);
      module.orderGame(BankName, 'Cyberpunk 2077', '2999', response);
}
});
if (request.url === '/cartRDR')
{
  module.cartGame('Red Dead Redemption 2', '3499', response);
}

if (request.url === '/cartRDRU')
{
  module.cartGame('Red Dead Redemption 2: Ultimate Edition', '5499', response);
}

if (request.url === '/cartRDO')
{
  module.cartGame('Red Dead Online', '999', response);
}

if (request.url === '/cartForbiddenWest')
{
  module.cartGame('Horizon Forbidden West', '5599', response);
}

if (request.url === '/cartGTAV')
{
  module.cartGame('Grand Theft Auto V', '2049', response);
}

if (request.url === '/cartGTAVP')
{
  module.cartGame('Grand Theft Auto V: Premium Edition', '3499', response);
}

if (request.url === '/cartCyberpunk')
{
  module.cartGame('Cyberpunk 2077', '2999', response);
}
   
}).listen(3000);
console.log("Server started");
