function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
const value = 0;  
if(getRndInteger(0,5)){
    console.log("Min")
}else{
    console.log("Max")
}
