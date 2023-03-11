// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([]));

// ====Task#21====

// function findLongestWord(string) {
//   // Change code below this line
//   const array = string.split(" ");
//   let longestWord = array[0];
//   for (const index of array) {
//     longestWord =
//       longestWord.length < index.length ? (longestWord = index) : longestWord;
//   }
//   return longestWord;

//   // Change code above this line
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("Google do a roll");
// findLongestWord("May the force be with you");
// findLongestWord("");

// ====Task#23====

// function filterArray(numbers, value) {
//   // Change code below this line
//   let arr = [];
//   for (const number of numbers) {
//     if (number > value) {
//       arr.push(number);
//     }
//   }
//   return arr;

//   // Change code above this line
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);
// filterArray([]);

// const friends = ["Mago", "Kiwi", "Poly", "Ajaax"];

// console.log(friends);

// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, heigh: tomorrowHigh },
//   } = forecast;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// calculateMeanTemperature({
//   today: { low: 28, high: 32 },
//   tomorrow: { low: 25, high: 29 },
// });
// calculateMeanTemperature({
//   today: { low: 37, high: 40 },
//   tomorrow: { low: 33, high: 38 },
// });

const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    // Change code below this line
    const bookIndex = this.books.indexOf(oldName);
    this.books.splice(bookIndex, 1, newName);
    // Change code above this line
  },
};
bookShelf.updateBook("Haze", "Dungeon chronicles");
bookShelf.updateBook("The last kingdom", "Dune");
