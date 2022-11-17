"use strict";

//Первая задача

const firstName = prompt("Введите своё имя");
const name = prompt("Введите свою фамилию");
const nickname = prompt("Введите свой никнейм");
if (firstName && name && nickname) {
  alert(`Hello, ${firstName} ${name}`);
}
if (firstName && name) {
  alert(`Hello, ${firstName} ${name}`);
}
if (firstName === "" && name && nickname) {
  alert(`Hello, ${nickname}`);
}
if (firstName && name === "" && nickname) {
  alert(`Hello, ${firstName}`);
}
if (
  (firstName === "" && name === "" && nickname === "") ||
  (firstName === "" && nickname === "") ||
  (firstName === "" && name === "")
) {
  alert("Hello, Noname");
}

// Вторая задача

let num = prompt("Введите число");
let answer1 = undefined;
let answer2 = undefined;
let answer3 = undefined;
let answer4 = undefined;

if (isNaN(num)) {
  alert("Вы ввели не число");
} else {
  if (num > 100) {
    answer1 = "больше ста";
  } else {
    answer1 = "меньше ста";
  }
  if (num % 2 == 0) {
    answer2 = "чётное";
  } else {
    answer2 = "нечётное";
  }
  if (num % 1 == 0) {
    answer3 = "недробное";
  } else {
    answer3 = "дробное";
  }
  if (num > 0) {
    answer4 = "положительное";
  } else {
    answer4 = "отрицательное";
  }
  alert(`Введенное Вами число ${answer1}, ${answer2}, ${answer3}, ${answer4}`);
}

// Третья задача.1

const a = prompt("Введите первое число");
const b = prompt("Введите второе число");
const c = prompt("Введите третье число");

isNaN(a) || isNaN(b) || isNaN(c)
  ? alert("какое-то из введенных значений не является числом")
  : alert(+a + +b + +c);

// Третья задача.2

const username = prompt("Введите, пожалуйста, своё имя");
const age = prompt("Введите свой возраст");

age >= 18
  ? alert(`Добро пожаловать, ${name}`)
  : alert(`Простите, ${name}, доступ закрыт`);

//Четвёртая задача
let num1 = prompt("Введите цифру");
if (isNaN(num1)) {
  alert("Извините, Вы ввели вообще не число");
} else {
  if (num1 > 10) {
    alert("Извините, Вы ввели не цифру, а число,большее 10");
  } else {
    switch (+num1) {
      case 0:
        alert("ноль");
        break;
      case 1:
        alert("один");
        break;
      case 2:
        alert("два");
        break;
      case 3:
        alert("три");
        break;
      case 4:
        alert("четыре");
        break;
      case 5:
        alert("пять");
        break;
      case 6:
        alert("шесть");
        break;
      case 7:
        alert("семь");
        break;
      case 8:
        alert("восемь");
        break;
      case 9:
        alert("девять");
        break;
    }
  }
}
