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
//alert(nbj1);//owns nb of rental for car 1
//alert(nbj2);//owns nb of rental for car 2
//alert(nbj3);//owns nb of rental for car 3

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

//diplay
var rep1 = "rental_price for " + rentals[0].driver.firstName + " is " + rental_price1;
console.log(rep1);
var rep2 = "rental_price for " + rentals[1].driver.firstName + " is " + rental_price2;
console.log(rep2);
var rep3 = "rental_price for " + rentals[2].driver.firstName + " is " + rental_price3;
console.log(rep3);
