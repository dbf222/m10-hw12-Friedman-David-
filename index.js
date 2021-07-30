// YOUR CODE HERE
// InstructionsYour assignment is to create a class named Car in JavaScript.
// This class will create objects that have three properties:



//
//
// Sources
// https://www.w3schools.com/js/js_classes.asp

// 1. make (String) - The car's manufacturer. E.g. Honda
// 2. model (String) - The type of model. E.g. Civic
// 3. year (Integer) - Four digit year the car was made. E.g. 1998

class Car {
   constructor (make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk(){
    console.log("BEEP BEEP!")
  }
   performMaintenance(){
    setTimeout(function() {
      console.log('Maintenance Complete')
    }, 3000)
  }
}


var mySweetRide =  new Car('Pontiac', 'Fiero', 1988)
mySweetRide.honk()
mySweetRide. performMaintenance()
//
// Your class should also have the following methods:
//   honk - This method should log "BEEP BEEP!" to the console when called
//   performMaintenance - This method should use the setTimeout function to log "maintenance complete" to the console after exactly 3 seconds.
//
// After you have created your Car class do the following in the order listed below:
//
// 1.  Create a variable named mySweetRide and assign it a car created with your class using the following arguments:
// o  make: 'Pontiac'
// o  model: 'Fiero'
// o  make: 1988
//
// 2.  call mySweetRide's honk method once
//
// 3.  call mySweetRide's performMaintenance method once
