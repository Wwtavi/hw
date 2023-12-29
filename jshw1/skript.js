let room = {
    height: 3,
    tv: 'samsung',
    big: true,
}
alert(room.big)
let user = {
  name: "John",
  age: 30,
};
//перевірка на наявність об'єкта та ключа 
if (Object.keys(user).length === 0) {
console.log('no') 
} else if("age" in user) {
    console.log("yes")
} else{
   console.log("no")
}
//виведення у bob змінну та видвлення Ann
let users = {
    user_1: {
      name: "John",
      age: 30,
    },
    user_2: {
      name: "Bob",
      age: 21,
    },
    user_3: {
      name: "Anna",
      age: 19,
    }
}
for (let key in users) {
    if (users.hasOwnProperty(key) && users[key].name==="Bob") {
        let nameOfUser = users[key].name;
        console.log(nameOfUser);
        break;
    }
}
for (let key in users) {
    if (users.hasOwnProperty(key) && users[key].name==="Anna") {
      delete users[key];
      break;
    }
}
console.log(users)
// Отримайте з об'єкта obj значення id у констанду id, не використовуючи вираз obj.id
const obj = {
  id: 5,
  token: 12343423
};
let {id}= obj;
console.log(id)
/*Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
Метод, який виводить на екран інформацію про автомобіль.
Додавання ім’я водія у список
Перевірка водія на наявність його ім’я у списку
Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 
*/
function car (produser, model, year, averageSpeed, fuelTankCapacity, fuelConsumption, drivers = []) {
  this.producer = produser;
  this.model = model;
  this.year = year;
  this.averageSpeed = averageSpeed;
  this.fuelTankCapacity = fuelTankCapacity;
  this.fuelConsumption = fuelConsumption;
  this.drivers = drivers;
}

function showInformation() {
  let info = 'producer: ' + this.producer + '\n'
  + 'model: ' + this.model + '\n'
  + 'Year: ' + this.year + '\n'
  + 'Speed: ' + this.averageSpeed + ' km/hour' + '\n'
  + 'Fuel tank volume: ' + this.fuelTankCapacity + ' l' + '\n'
  + 'The average fuel consumption per 100 km: ' + this.fuelConsumption + ' l';
  alert(info);
}
addDriver('Masha')
checkDriver('Masha');
function addDriver(driverName) {
  this.drivers =[this.drivers, driverName];
  console.log(`${driverName}added as a driver.`);
}

function checkDriver(driverName) {
  let isDriverPresent = this.drivers.includes(driverName);
  if (isDriverPresent) {
    console.log(`${driverName} is a driver of car.`);
  } else {
    console.log(`${driverName} is not a driver of car.`);
  }
}

function calculateTravelDetails(distance) {
  let breakInterval = 4;
  let breakDuration = 1;
  let travelTime = (distance / this.averageSpeed) + Math.floor(distance / (breakInterval * this.averageSpeed)) * breakDuration;
  let fuelNeeded = (distance / 100) * this.fuelConsumption;
  console.log(`For a distance of ${distance} km:`);
  console.log(`Estimated travel time: ${travelTime.toFixed(2)} hours`);
  console.log(`Estimated fuel needed: ${fuelNeeded.toFixed(2)} liters`);
}
let firstCar =  new car('BMV', 'X6', 2008, 100, 60, 8);
console.log(firstCar)
calculateTravelDetails(500);
function showInfo() {
  let info = "produser: " + car.produser
  + "model: " + car.model 
  + "year: " + car.year
  + "speed: " + car.speed
  + "Fuel tank volume :" + car.tankvolume
  + "average fuel/100rm" + car.avgfuel
  alert(info);
}
showInfo();
