
import interns,{department,bio, PI, capitalizeString, sum, multiply, subtract, carProp, countries } from "./impExp.js";


const calculatePi=(radius)=>{
let circumference=2*PI*radius;
return circumference;
}
const capitalize=(value)=>{
   
    console.log(`My name is ${capitalizeString(value)}`)
}

const workingWithImpExp=()=>{
interns();
department();
console.log(bio(15).name);
console.log(calculatePi(4));
capitalize("Ani Daniel");
console.log(sum(2,3));
console.log(multiply(2,3));
console.log(subtract(2,3));
console.log(carProp());
countries.forEach((country)=>{
 console.log(`Countries for selection: ${country}`)
})
}

workingWithImpExp();
