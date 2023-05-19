const arrayReverse=()=>{
    let reverse=[1,2,3,4,5];
    for(var a=reverse.length-1;a>=0;a--){
        console.log(reverse[a]);
    }
   
    return {name:'daniel',age:200,isTall:true}
    
}
console.log(arrayReverse());

const star1=()=>{
    for(var a=0; a<=4; a++){
        let star="";
      for(var b=4; b>=a; b--){
         star+="*";
      }
      console.log(star);
    }
}

star1();