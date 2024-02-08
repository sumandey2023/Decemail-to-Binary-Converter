alert("Suman");
let input = document.body.querySelector("#input");
let output = document.body.querySelector("#output");
let btn1 = document.body.querySelector( "#btn" );
btn1.addEventListener("click",()=>{
    binary();
})
function binary(){
    let N = input.value; 
    let binary = decimalToBinary(N); 
    output.value=binary;
    
} function decimalToBinary(N) { 
    return (N >>> 0).toString(2); 
} 