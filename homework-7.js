import { commentsSocialNetworks } from "./comments.js";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const filteredNumbers = numbers.filter((number) => {
  return number >= 5;
});


const fabrics = ["Шелк", "Хлопок","Бархат", "Твид"];
  const hasSilk = fabrics.includes("Шелк");


const reverseMyData = (array) => {
  return array.reverse();
};


const reverseArray = (dataList) => {
  return dataList.reverse();
};

const reversedNumbers = reverseArray(numbers);
const reversedFabrics = reverseArray(fabrics);