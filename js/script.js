
for (let numero = 1; numero <= 100; numero++) {

    if (numero % 5 == 0 && numero % 3 == 0) {
        console.log("FizzBuzz");
    }
    if (numero % 3 == 0 && numero % 5 != 0) {
        console.log("Fizz");
    }
   
    if (numero % 5 == 0 && numero % 3 != 0) {
        console.log("Buzz");
    }
    if (numero % 5 != 0 && numero % 3 != 0) {
        console.log(numero);
    }
    

