
const container = document.querySelector('.container');
for (let numero = 1; numero <= 100; numero++) {
    
let valore = numero

if (numero % 5 == 0 && numero % 3 == 0) {
    valore = "FizzBuzz"
}
if (numero % 3 == 0 && numero % 5 != 0) {
    valore = "Fizz"
}

if (numero % 5 == 0 && numero % 3 != 0) {
    valore = "Buzz"
}
if (numero % 5 != 0 && numero % 3 != 0) {
    valore = numero
}

    const newLi = document.createElement('div');
    newLi.innerHTML = valore;
    container.append(newLi);

    if (numero % 5 == 0 && numero % 3 == 0) {
        newLi.style.backgroundColor="#F0466F";
    }
    if (numero % 3 == 0 && numero % 5 != 0) {
        newLi.style.backgroundColor="#0CD6A1";
    }
    
    if (numero % 5 == 0 && numero % 3 != 0) {
        newLi.style.backgroundColor="#FFD166";
    }
    if (numero % 5 != 0 && numero % 3 != 0) {
        newLi.style.backgroundColor="#1389B2";
    }

}

