
// (3) Создание функции, которая принимает 
//     два параметра: город и температуру

const showWeather = (city, temperature) => {
  console.log(`Сейчас в ${city}, температура - ${temperature} градусов по Цельсию.`)
};
showWeather("Москве", "15");


// (4) Создание переменной и функции с одним аргументом

const LIGHT_SPEED = 299792458;

let lightSpeed = 299792458;

const compareLightSpeed = (speed) => {
  if (speed > 299792458) {  
  console.log("Сверхсветовая скорость");
} else if (speed === 299792458) {
  console.log("Скорость света");
} else {
  console.log("Субсветовая скорость");
  }
};
compareLightSpeed(100);


// (5) Создание переменнной №1 и №2. Создание функции, которая
//     принмает один параметр 

let fabric = "Шелк";
let price = 100000;

const buyProduct = (budget) => {
  if (budget >= price) {
    console.log(`${fabric} приобретен. Спасибо за покупку!`);
  } else {
    let difference = price - budget;
    console.log(`Вам не хватает ${difference}, пополните баланс.`);
  }
};
buyProduct(50000);


// (6) Создание и именование функции

const reviewList = () => {
  console.log("Список продуктов"); 
};


// (7) Созднаие трех переменных 

let announcement = "Встреча состоится 18 марта 2026г.";

const aboutMe = "Я мусульманка, делаю дизайн для презентаций. Мне 39 лет.";
  
let portfolio = "Портфолио моих работ.";
  console.log(portfolio);