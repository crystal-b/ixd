function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  noStroke();
  fill(0);
  //var url = "https://api.foursquare.com/v2/venues/search?client_id=0KU3GS0F2XSYDNGEVIXUCQ3HLQOVEA0QUFHOJ3TPNO15F5TD&client_secret=TAUOPANPQWVUZSYSNE2O5K33JBTXH2XFRLH1JOW4WTONLECJ&v=20130815&ll=40.7,-74&query=sushi";
  //SEARCH API FOR OBJECTS WITH LOCATION: FRANCE, IMAGES: 1(MEANS YES), AND THAT MENTION TEXTILES IN THE DESCRIPTION
  var urlFrance = "https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.search.objects&access_token=9af945bd0e680981d744f8a0ad615d4c&query=textiles&has_images=1&location=france&page=1&per_page=100";
  loadJSON(urlFrance, drawFrance);
 // var urlPawn = "https://api.foursquare.com/v2/venues/search?client_id=0KU3GS0F2XSYDNGEVIXUCQ3HLQOVEA0QUFHOJ3TPNO15F5TD&client_secret=TAUOPANPQWVUZSYSNE2O5K33JBTXH2XFRLH1JOW4WTONLECJ&v=20130815&ll=26.6,-80.1&query=pawn";
  //loadJSON(urlPawn, drawData);
}

function draw() {

}

//display first textile selection from JSON results
function drawFrance(data) {
	var frenchTextiles = data.objects;
  	console.log(frenchTextiles);
  	for (var i=0; i<5; i++) {
    console.log(frenchTextiles[i].title);
    console.log(frenchTextiles[i].images);
    fill(0,[i]*50,200);
    ellipse(150, 150+(i*100), 100, 100);
    fill(0);
    text(frenchTextiles[i].title);
	}
/*	
	for (var i=5; i<10; i++) {
    console.log("row2");
    fill(200);
    ellipse(300, 150+(i*100), 100, 100);
    text(frenchTextiles[i].title);
	}
*/	

//display empty quilt
	text("Textiles from France", 100, windowHeight/10);
	text("Click a textile, then click a spot to add it to the quilt", 450, windowHeight/10);
		console.log("drawing empty quilt");
		stroke(0);
		fill(255);
		ellipse(500, 150, 100, 100);
		ellipse(600, 150, 100, 100);
		ellipse(700, 150, 100, 100);
		ellipse(800, 150, 100, 100);
		ellipse(900, 150, 100, 100);
		ellipse(500, 250, 100, 100);
		ellipse(600, 250, 100, 100);
		ellipse(700, 250, 100, 100);
		ellipse(800, 250, 100, 100);
		ellipse(900, 250, 100, 100);
		ellipse(500, 350, 100, 100);
		ellipse(600, 350, 100, 100);
		ellipse(700, 350, 100, 100);
		ellipse(800, 350, 100, 100);
		ellipse(900, 350, 100, 100);
		ellipse(500, 450, 100, 100);
		ellipse(600, 450, 100, 100);
		ellipse(700, 450, 100, 100);
		ellipse(800, 450, 100, 100);
		ellipse(900, 450, 100, 100);


		//if ( mouseclick x y && mouseclick newx new y) {}

}

//allow user to move textiles from the selection to the quilt
function mousePressed() {
	var swatch1 = dist(mouseX, mouseY, 150, 150);
	var swatch2 = dist(mouseX, mouseY, 150, 250);
	var swatch3 = dist(mouseX, mouseY, 150, 350);
	var swatch4 = dist(mouseX, mouseY, 150, 450);
	var swatch5 = dist(mouseX, mouseY, 150, 550);
	var tile1 = dist(mouseX, mouseY, 500, 150);
	var tile2 = dist(mouseX, mouseY, 600, 150);
	var tile3 = dist(mouseX, mouseY, 700, 150);
	var tile4 = dist(mouseX, mouseY, 800, 150);
	var tile5 = dist(mouseX, mouseY, 900, 150);
	var tile1b = dist(mouseX, mouseY, 500, 250);
	var tile2b = dist(mouseX, mouseY, 600, 250);
	var tile3b = dist(mouseX, mouseY, 700, 250);
	var tile4b = dist(mouseX, mouseY, 800, 250);
	var tile5b = dist(mouseX, mouseY, 900, 250);
	var tile1c = dist(mouseX, mouseY, 500, 350);
	var tile2c = dist(mouseX, mouseY, 600, 350);
	var tile3c = dist(mouseX, mouseY, 700, 350);
	var tile4c = dist(mouseX, mouseY, 800, 350);
	var tile5c = dist(mouseX, mouseY, 900, 350);
	var tile1d = dist(mouseX, mouseY, 500, 450);
	var tile2d = dist(mouseX, mouseY, 600, 450);
	var tile3d = dist(mouseX, mouseY, 700, 450);
	var tile4d = dist(mouseX, mouseY, 800, 450);
	var tile5d = dist(mouseX, mouseY, 900, 450);
	if (swatch1 < 50) {
		stroke(0);
		fill(0,50,200);
		console.log("change fill 1");
	}
	else if (swatch2 < 50) {
		stroke(0);
		fill(0,100,200);
		console.log("change fill 2");
	}
	else if (swatch3 < 50) {
		stroke(0);
		fill(0,150,200);
		console.log("change fill 3");
	}
	else if (swatch4 < 50) {
		stroke(0);
		fill(0,200,200);
		console.log("change fill 4");
	}
	else if (swatch5 < 50) {
		stroke(0);
		fill(0,250,200);
		console.log("change fill 5");
	}
		if (tile1 < 50) {
			ellipse(500, 150, 100, 100);
			console.log("tile1 color");
		}
		else if (tile2 < 50) {
			ellipse(600, 150, 100, 100);
			console.log("tile2 color");
		}
		else if (tile3 < 50) {
			ellipse(700, 150, 100, 100);
			console.log("tile3 color");
		}
		else if (tile4 < 50) {
			ellipse(800, 150, 100, 100);
			console.log("tile4 color");
		}
		else if (tile5 < 50) {
			ellipse(900, 150, 100, 100);
			console.log("tile5 color");
		}
}

/*
function drawData(data) {
  var places = data.response.venues;
  console.log(places);
  for (var i=0; i<places.length; i++) {
    var x = map(places[i].location.distance, 0, 5000, 0, width);
    var y = map(places[i].stats.checkinsCount, 0, 5000, 0, height);
    console.log(places[i].stats);
    fill(100);
    ellipse(x, windowHeight/2, x/10, y/5);
    //text(places[i].name, x, y);
  }
  text("School Checkins by Location", 10, windowHeight/2.2);
}
*/



/*
function doSomething() {
  console.log("doing something!");
}

setTimeout(doSomething, 5000);
*/


/*var skools = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	noLoop();
	noStroke();
	//fill(0);
	var url = "https://api.foursquare.com/v2/venues/search?client_id=0KU3GS0F2XSYDNGEVIXUCQ3HLQOVEA0QUFHOJ3TPNO15F5TD&client_secret=TAUOPANPQWVUZSYSNE2O5K33JBTXH2XFRLH1JOW4WTONLECJ&v=20130815&ll=26.6,-80.1&query=school";
	data = loadJSON(url, drawData);
	schools = loadJSON(url, draw);
}

function draw() {
	/*
	background(100);
	textSize(16);
	textStyle(NORMAL);
	console.log("background");
	for(var i=0; i<place.length; i++) {
		console.log("amIdrawing?");
		console.log(place[i]);
	}
	*/
/*}


function drawData(data) {
	var places = data.response.venues;
	console.log(places);
	for(var i=0; i<places.length; i++) {
		var x = map(places[i].location.distance, 0, 5000, width);
		var y = map(places[i].stats.checkinsCount, 0, 5000, height);
		console.log(places[i].stats);
		text(places[i].name, x, y);
		console.log(places[i].name);
		//console.log(places[i].categories.name);
		ellipse(100+150*i, 100, 10,10);
		fill(255);
		console.log("drawing");
	}




	/*
	if(available<1) {
		fill(255,0,0);
	}
	else {
		fill(0,255,0);
	}
		rect(300, 200, 50, 50);
	*/
/*}

	/*
	function draw(schools) {
		var skools = schools.response.venues;
		console.log("drawing");
		for(var i=0; i<skools.length; i++) {
			var x = map(skools[i].location.distance, 0, 5000, width);
			var y = map(skools[i].stats.checkinsCount, 0, 5000, height);
			ellipse(x, height/2, y, y);
			fill(255);
		}
	}
	*/


/*
var bubbles = [];

function setup() {
  createCanvas(600, 400);
  noStroke();
  loadJSON('http://api.openweathermap.org/data/2.5/weather?q=NewYork,USA', drawWeather); 
}

function drawWeather(weather) {

  // Get the loaded JSON data
  console.log(weather); // inspect the weather JSON
  var humidity = weather.main.humidity; // get the main.humidity out of the loaded JSON
  console.log(humidity); // inspect the humidity in the console

  background(40, 90, 200);
  fill(0, 255, 255, humidity); // use the humidity value to set the alpha
  for (var i = 0; i < 50; i++) {
    ellipse(random(width), random(height), 30, 30);
  }
}
*/





