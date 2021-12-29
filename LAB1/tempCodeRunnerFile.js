//array
const cars=["Toyota","Kubota","Mazda"];
const planes=[];
planes[4]="F16";
planes[1]="Boing777"; 
console.log(cars);
console.log(planes);
const citites=new Array("Buriram",31000);
console.log(citites[1]);

//Array Medthod
let car = cars.pop();
console.log(cars);
cars.push("Honda");
console.log(cars);
cars.shift();
console.log(cars);
cars.unshift("Tata");
console.log(cars);

const jpCars=cars.slice(1,3);
console.log(jpCars);
cars.splice(1,1,"Subaru","Lexus");
console.log(cars);

//concat
const mixArr=cars.concat(planes);
console.log(mixArr);
const mixString=mixArr.toString();
console.log(mixString);