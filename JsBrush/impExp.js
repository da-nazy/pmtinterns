export const bio=(age)=>{
    if(age>18){
    console.log('Can vote')
    }else{
        console.log('can not vote')
    }
    return{
        name:"daniel",
        isTall:false,
        height:120
    }
}

 export const department=()=>{
    console.log('IT')
}
const interns=()=>{
    console.log('All Interns')
}

export const capitalizeString=(input)=>{
if(input){
  return input.toUpperCase();
}else{
    return "No value found!"
}
}

export const PI=3.14159;
export const sum=(a,b)=>{
   
    return Number.parseFloat(a+"")+Number.parseFloat(b.toString());
}

export const subtract=(a,b)=>{
    return Number.parseFloat(a+"")-Number.parseFloat(b.toString());
  
}
export const multiply=(a,b)=>{
    return Number.parseFloat(a+"")*Number.parseFloat(b.toString());
  
}
export const carProp=()=>{
    return { make:"Toyota",model:"Camery",year:"2020"}
}
export const countries=[
    "Afghanistan",
    "Kenya",
    "Nigeria",
    "Iran",
    "Russia",
    "India",
    "Ukraine",
    "Canada",
    "Spain"
]
export default interns;