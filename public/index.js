'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];

console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);

//Exercice 1
//prix par jour
//prix p306 -> cars[0].pricePerDay
//prix rr-sport -> cars[1].pricePerDay
//prix p-boxster -> cars[2].pricePerDay
//prix par km
//prix p306 -> cars[0].pricePerKm
//prix rr-sport -> cars[1].pricePerKm
//prix p-boxster -> cars[2].pricePerKm
//
//number of rental days
//p306
var sa1 = rentals[0].pickupDate; 
var sa2 = rentals[0].returnDate;
var pattern = /(\d{2})\-(\d{2})\-(\d{4})/;
var da1 = new Date(sa1.replace(pattern,'$3-$2-$1'));
var da2 = new Date(sa2.replace(pattern,'$3-$2-$1'));
var nbj1 = -(da1-da2)/(3600*24*1000);
//rr-sport
var sb1 = rentals[1].pickupDate; 
var sb2 = rentals[1].returnDate;
var pattern = /(\d{2})\-(\d{2})\-(\d{4})/;
var db1 = new Date(sb1.replace(pattern,'$3-$2-$1'));
var db2 = new Date(sb2.replace(pattern,'$3-$2-$1'));
var nbj2 = -(db1-db2)/(3600*24*1000);
//p-boxster
var sc1 = rentals[2].pickupDate; 
var sc2 = rentals[2].returnDate;
var pattern = /(\d{2})\-(\d{2})\-(\d{4})/;
var dc1 = new Date(sc1.replace(pattern,'$3-$2-$1'));
var dc2 = new Date(sc2.replace(pattern,'$3-$2-$1'));
var nbj3 = -(dc1-dc2)/(3600*24*1000);
//


//number of km
//p306 -> rentals[0].distance
//rr-sport -> rentals[1].distance
//p-boxster -> rentals[2].distance
//
//tc: the number of rental days multiplied by the car's price per day
var tc1 = nbj1*cars[0].pricePerDay;
var tc2 = nbj2*cars[1].pricePerDay;
var tc3 = nbj3*cars[2].pricePerDay;
//dc: the number of kilometers multiplied by the car's price per km
var dcc1 = rentals[0].distance*cars[0].pricePerKm;
var dcc2 = rentals[1].distance*cars[1].pricePerKm;
var dcc3 = rentals[2].distance*cars[2].pricePerKm;
//result
var rental_price1 = tc1 + dcc1;
var rental_price2 = tc2 + dcc2;
var rental_price3 = tc3 + dcc3;

//decreasing pricing
//identify the category
var discount_check=0;
var discount_check2=0;
var discount_check3=0;
if(nbj1>1&&nbj1<=4){
    discount_check=1;
}else if (nbj1>4&&nbj1<=10){
    discount_check=2;
}else if (nbj1>10){
    discount_check=3;
}else{
    //no changes if it's a day to day rental
}
if(nbj2>1&&nbj2<=4){
    discount_check2=1;
}else if (nbj2>4&&nbj2<=10){
    discount_check2=2;
}else if (nbj2>10){
    discount_check2=3;
}else{
    //no changes if it's a day to day rental
}
if(nbj3>1&&nbj3<=4){
    discount_check3=1;
}else if (nbj3>4&&nbj3<=10){
    discount_check3=2;
}else if (nbj3>10){
    discount_check3=3;
}else{
    //no changes if it's a day to day rental
}
var discount;
var discount2;
var discount3;
var price_dis1;
var price_dis2;
var price_dis3;
//driver1
if(discount_check === 1){
//10% discount range
discount=0.1*cars[0].pricePerDay*(nbj1-1);
price_dis1 = rental_price1 - discount;
}else if(discount_check === 2){
discount=0.1*cars[0].pricePerDay*3 + 0.3*cars[0].pricePerDay*(nbj1-4);
price_dis1 = rental_price1 - discount;
}else if(discount_check === 3){
discount=0.1*cars[0].pricePerDay*3 + 0.3*cars[0].pricePerDay*6 + 0.3*cars[0].pricePerDay*(nbj1-10);    
price_dis1 = rental_price1 - discount;
}else if(discount_check === 0){
price_dis1 = rental_price1;
}
//driver2
if(discount_check2 === 1){
//10% discount range
discount2=0.1*cars[1].pricePerDay*(nbj2-1);
price_dis2 = rental_price2 - discount2;
}else if(discount_check2 === 2){
discount2=0.1*cars[1].pricePerDay*3 + 0.3*cars[1].pricePerDay*(nbj2-4);
price_dis2 = rental_price2 - discount2;
}else if(discount_check2 === 3){
discount2=0.1*cars[1].pricePerDay*3 + 0.3*cars[1].pricePerDay*6 + 0.3*cars[1].pricePerDay*(nbj2-10);  
price_dis2 = rental_price2 - discount2;
}else if(discount_check2 === 0){
price_dis2 = rental_price2;
}
//driver3
if(discount_check3 === 1){
//10% discount range
discount3=0.1*cars[2].pricePerDay*(nbj2-1);
price_dis3 = rental_price3 - discount3;
}else if(discount_check3 === 2){
discount3=0.1*cars[2].pricePerDay*3 + 0.3*cars[2].pricePerDay*(nbj3-4);
price_dis3 = rental_price3 - discount3;
}else if(discount_check3 === 3){
discount3=0.1*cars[2].pricePerDay*3 + 0.3*cars[2].pricePerDay*6 + 0.3*cars[2].pricePerDay*(nbj3-10);  
price_dis3 = rental_price3 - discount3;
}else if(discount_check3 === 0){
price_dis3 = rental_price3;
}
//Computation ex3
var insurance1 = 0.5*price_dis1;
var insurance2 = 0.5*price_dis2;
var insurance3 = 0.5*price_dis3;
var road_assist1 = nbj1+1;
var road_assist2 = nbj2+1;
var road_assist3 = nbj3+1;
var drivy1 = price_dis1 - insurance1 - road_assist1;
var drivy2 = price_dis2 - insurance2 - road_assist2;
var drivy3 = price_dis3 - insurance3 - road_assist3;

//ex4
//option status
var cond1 = rentals[0].options.deductibleReduction;
var cond2 = rentals[1].options.deductibleReduction;
var cond3 = rentals[2].options.deductibleReduction;
var price_option1;
var price_option2;
var price_option3;
if(cond1===true){
    price_option1= price_dis1 + 4*nbj1;
}else{
    price_option1= price_dis1;
}
if(cond2===true){
    price_option2= price_dis2 + 4*nbj2;
}else{
    price_option1= price_dis1;
}
if(cond3===true){
    price_option3= price_dis3 + 4*nbj3;
}else{
    price_option1= price_dis1;
}
//ex5
//driver1
actors[0].payment[0].amount = actors[0].payment[0].amount-price_op1; //driver
actors[0].payment[0].amount = actors[0].payment[0].amount+price_op1; //owner
actors[0].payment[0].amount  = actors[0].payment[0].amount+insurance1; //insurance
actors[0].payment[0].amount  = actors[0].payment[0].amount+road_assist1; //assistance
actors[0].payment[0].amount = actors[0].payment[0].amount+drivy1;  //drivy
//driver2
actors[1].payment[0].amount = actors[1].payment[0].amount-price_op2; //driver
actors[1].payment[0].amount = actors[1].payment[0].amount+price_op2; //owner
actors[1].payment[0].amount  = actors[1].payment[0].amount+insurance2; //insurance
actors[1].payment[0].amount  = actors[1].payment[0].amount+road_assist2; //assistance
actors[1].payment[0].amount = actors[1].payment[0].amount+drivy2;  //drivy
//driver3
actors[2].payment[0].amount = actors[2].payment[0].amount-price_op3; //driver
actors[2].payment[0].amount = actors[2].payment[0].amount+price_op3; //owner
actors[2].payment[0].amount  = actors[2].payment[0].amount+insurance3; //insurance
actors[2].payment[0].amount  = actors[2].payment[0].amount+road_assist3; //assistance
actors[2].payment[0].amount = actors[2].payment[0].amount+drivy3;  //drivy

//diplay ex1
console.log("ex1");
var rep1 = "rental_price for " + rentals[0].driver.firstName + " is " + rental_price1;
console.log(rep1);
var rep2 = "rental_price for " + rentals[1].driver.firstName + " is " + rental_price2;
console.log(rep2);
var rep3 = "rental_price for " + rentals[2].driver.firstName + " is " + rental_price3;
console.log(rep3);
//display ex2
console.log("ex2");
var repdis1 = "discount_price for " + rentals[0].driver.firstName + " is " + price_dis1;
console.log(repdis1);
var repdis2 = "discount_price for " + rentals[1].driver.firstName + " is " + price_dis2;
console.log(repdis2);
var repdis3 = "discount_price for " + rentals[2].driver.firstName + " is " + price_dis3;
console.log(repdis3);
//display ex3
console.log("ex3");
var part1 = "For " + rentals[0].driver.firstName + " road_assist " + road_assist1 + " drivy " + drivy1 +" insurance " + insurance1;
console.log(part1);
var part2 = "For " + rentals[1].driver.firstName + " road_assist " + road_assist2 + " drivy " + drivy2 +" insurance " + insurance2;
console.log(part2);
var part3 = "For " + rentals[2].driver.firstName + " road_assist " + road_assist3 + " drivy " + drivy3 +" insurance " + insurance3;
console.log(part3);
//display ex4
console.log("ex4");
var price_op1 = "For " + rentals[0].driver.firstName + " with option " + price_option1 ;
console.log(price_op1);
var price_op2 = "For " + rentals[1].driver.firstName + " with option " + price_option2 ;
console.log(price_op2);
var price_op3 = "For " + rentals[2].driver.firstName + " with option " + price_option3 ;
console.log(price_op3);
//display ex4
console.log("ex4");
console.log("Check updates in file");
