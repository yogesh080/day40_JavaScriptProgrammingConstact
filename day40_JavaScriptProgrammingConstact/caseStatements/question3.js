let input = 54;
//defining digit position for getting position of digits in the input
let digitPosition=0;
while(input>0)
{
    digitPosition+=1;
    
    let modulusResult= input%10;
    input= Math.floor(input/10);
    console.log('Digit at '+digitPosition+' place is: '+modulusResult);
}