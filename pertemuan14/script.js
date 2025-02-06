function penambahan(a,b) {
    return a + b;
}

function perkalian(a,b) {
    return a * b;
}

function calculate(num1, num2, operation) {
    let result = operation(num1, num2);
    console.log("Hasil:", result);
}
 
function main(){
    calculate(5, 3, penambahan); 
    calculate(4, 2, perkalian); 
}
main()
