const randomDice1 = Math.floor(6*Math.random())+1;
const randomDice2 = Math.floor(6*Math.random())+1;
const randomDice3 = Math.floor(6*Math.random())+1;
const randomDice4 = Math.floor(6*Math.random())+1;
const randomDice5 = Math.floor(6*Math.random())+1;

const sum = randomDice1+randomDice2+randomDice3+randomDice4+randomDice5;
console.log("Sum of 5 dices is: "+ sum)

let avarage = sum / 5;
console.log("Avarage Value of Dices is : " +  avarage)
