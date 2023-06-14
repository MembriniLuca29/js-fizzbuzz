



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

}

/*const ul = document.querySelector('.list');
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

    const newLi = document.createElement('li');
    newLi.innerHTML = valore;
    ul.append(newLi);

}*/

