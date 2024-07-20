"use strict";

function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

let input = prompt("Введіть ціле число:");
let N = parseInt(input, 10);

if (!isNaN(N) && input.trim() !== '') {
    let resultDiv = document.getElementById('result');
    if (isPrime(N)) {
        resultDiv.textContent = `${N} є простим числом.`;
    } else {
        resultDiv.textContent = `${N} не є простим числом.`;
    }
} else {
    alert("Введено некоректне значення. Будь ласка, введіть ціле число.");
}
