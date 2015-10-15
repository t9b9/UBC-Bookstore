var cart = [];
var products = [];

document.addEventListener("DOMContentLoaded", function () {
	products["Box1"] = 10;
	products["Box2"] = 10;
	products["Clothes1"] = 10;
	products["Clothes2"] = 10;
	products["Jeans"] = 10;
	products["Keyboard"] = 10;
	products["KeyboardCombo"] = 10;
	products["Mice"] = 10;
	products["PC1"] = 10;
	products["PC2"] = 10;
	products["PC3"] = 10;
	products["Tent"] = 10;
}, false);

console.log( products["Tent"] );
console.log( products.length );
console.log( "=====" );
/* console.log(document.getElementsByClassName("addButton")); */


/* var addButtons;
document.addEventListener("DOMContentLoaded", function () {
    addButtons = document.getElementsByClassName("addButton");
    console.log(addButtons);
	console.log( "++++++" );
	console.log(addButtons.length);
	console.log(addButtons[0]);
	console.log(addButtons[0].parentNode.lastChild.innerHTML);
	addButtons[0].addEventListener("click", addToCart);
 	for(var i = 0; i <¡¡addButtons.length; i++){
		addButtons[i].addEventListener("click", 
			function addToCart(productName){
				alert("oh snap, i was clicked...");
			}
	} 
}, false); */

//var addButtons = document.getElementsByClassName("addButton");
var inactiveTime = 30000;
var interval; 
interval = setInterval(function(){ intervalHandler() }, inactiveTime);
function intervalHandler() {
	alert( "Hey there! Are you still planning to buy something? ");
};


function addToCart(productName) {
	//alert("oh " + productName + " added...");
	clearInterval(interval);
	inactiveTime = 30000;
	interval = setInterval(function(){ intervalHandler() }, inactiveTime);
	
	if(cart[productName] == undefined){
		cart[productName] = 1;
		console.log( "heheheheh");
	}else{
		cart[productName] = cart[productName] + 1;
	}
	products[productName] = products[productName] - 1;
	console.log( "cart[" + productName + "]" );
	console.log( cart[productName] );
	console.log( "products[" + productName + "]" );
	console.log( products[productName] );
}

function removeFromCart(productName) {
	//alert("oh " + productName + " removed...");
	clearInterval(interval);
	inactiveTime = 30000;
	interval = setInterval(function(){ intervalHandler() }, inactiveTime);
	
	if(cart[productName] == undefined)
		alert("product does not exist in the cart");
	else{
		cart[productName] = cart[productName] - 1;
		products[productName] = products[productName] + 1;
		if(cart[productName] == 0)
			delete cart[productName];
	}
	console.log( "cart[" + productName + "]" );
	console.log( cart[productName] );
	console.log( "products[" + productName + "]" );
	console.log( products[productName] );
}

function showCart(){
	console.log("hehe show cart");
	var length = 0;
	var interv;
	var copyKey = [];
	for (var key in cart) {
		copyKey[length] = key;
		length++;	
	}
	console.log("length: " + length);
	console.log("copyKey: " + copyKey);
	
	var count = 0;
	var product_name;
	var amount;
	
	var intervalHandler = function() {
		if (count == length) {
			clearInterval(interv);
		}else{
			product_name = copyKey[count];
			amount = cart[product_name];
			alert( product_name + " " + amount);
			count = count + 1;
		}
	};
	interv = setInterval(intervalHandler, 30000);
}