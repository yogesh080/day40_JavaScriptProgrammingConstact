function converter()
{
    let n= 2;
    switch(n)
    {
        case 1:
            farehnietToCelcius();
            break;
        case 2:
            CelciusTofarehniet();
            break;
        default:
            console.log("you entered incorrect input");
            break;
    }
}
function farehnietToCelcius()
{
    
    let degF= 120;
    if(degF>=32 && degF<=212 )
    {
    let degC= (degF-32)*(5/9);
    console.log("celcius: "+degC);
    }
    else
    {
        console.log("farheniet temperature is not in correct range");
    }
}
function CelciusTofarehniet()
{
    let degC= 43;
    if(degC>=0 && degC<=100 )
    {
    let degF= (degC*(9/5))+32;
    console.log("celcius: "+degF);
    }
    else
    {
        console.log("celcius temperature is not in correct range");
    }
}
converter();