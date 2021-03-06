
let driverId = 0;
const store = { drivers:[], passengers:[], trips:[] }

class Driver{
  constructor(name){
    this.id = ++driverId;
    this.name = name;
    store.drivers.push(this);
  };

  trips(){
    return store.trips.filter(
      function (trip) {
        return trip.driverId === this.id;
      }.bind(this)
    );
  };

  passengers(){

    const trips = this.trips();

    return trips.map(function(trip){
      return trip.passenger();
    });
  };

}

let passengerId = 0;

class Passenger{
  constructor(name){
    this.id = ++passengerId;
    this.name = name;
    store.passengers.push(this);
  };

  trips(){
    return store.trips.filter(
      function (trip) {
        return trip.passengerId === this.id;
      }.bind(this)
    );
  };

  drivers(){
    const trips = this.trips();
    return trips.map(function(trip){
      return trip.driver();
    });
  };
}

let tripId = 0;

class Trip{
  constructor(driver, passenger){
    this.id = ++ tripId;
    store.trips.push(this);
    if (driver){
      this.driverId = driver.id;
    };
    if (passenger){
      this.passengerId = passenger.id;
    };
  };

  driver(){
    return store.drivers.find(
      function(driver){
        return driver.id === this.driverId;
      }.bind(this)
    );
  };

  passenger(){
    return store.passengers.find(
      function(passenger){
        return passenger.id === this.passengerId;
      }.bind(this)
    );
  };

}
