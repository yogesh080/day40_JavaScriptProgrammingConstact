//Harmonic Number

const Harmonic = () =>{
    let n = 12;
    let add = 0;
    for(let i = 1;i<=n;i++){
        add += Reci(i)
    }
    console.log("Harmonic sum is: " + add);

}
const Reci = (a) =>{
    return 1/a;
}
Harmonic();