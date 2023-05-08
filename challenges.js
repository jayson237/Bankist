'use strict';
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (val, key, map) {
  console.log(`${key}: ${val}`);
});

// Set (does not have key)
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (val, _, set) {
  console.log(`${_}: ${val}`);
});

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

// Array Slice Method (to extract)
// Does not mutate

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2, -1));
console.log(arr.slice(-2));
console.log(arr.slice());
console.log(arr);

// Splice Method (to remove)
// Does mutate

arr.splice(-1);
arr.splice(2, 1); //the '1' here is the amount of numbers we want to delet from position 2
console.log(arr);

// Reverse
// Does mutate

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// Concat
const letters = arr.concat(arr2);
console.log(letters);

// Join
console.log(letters.join('-'));

// At
const arr3 = [23, 11, 64];
console.log(arr3.at(0)); // arr3[0]
console.log(arr3[arr3.length - 1]);
console.log(arr3.slice(-1)[0]);
console.log(arr3.at(-1));

// forEach Method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, move] of movements.entries()) {
  const movement =
    move > 0
      ? `Movement ${i + 1}: Deposited ${move}`
      : `Movement ${i + 1}: Withdrew ${Math.abs(move)}`;
  console.log(movement);
}
console.log('-----------------------------------------');
movements.forEach(function (move, i, arr) {
  const movement =
    move > 0
      ? `Movement ${i + 1}: Deposited ${move}`
      : `Movement ${i + 1}: Withdrew ${Math.abs(move)}`;
  console.log(movement);
});
*/

// Challenge 1
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const checkDogs = function (dogsJulia, dogsKate) {
  const juliaCorrected = dogsJulia.slice(1, 4);
  let i = juliaCorrected.length;
  juliaCorrected.forEach((age, index) => {
    console.log(
      `Dog number ${index + 1} is ${
        age >= 3 ? `an adult, and is ${age} years old` : `still a puppy 🐶`
      } `
    );
  });
  dogsKate.forEach(age => {
    console.log(
      `Dog number ${i + 1} is ${
        age >= 3 ? `an adult, and is ${age} years old` : `still a puppy 🐶`
      } `
    );
    i++;
  });
};

checkDogs(dogsJulia, dogsKate);

// Challenge 2
const ages = [5, 2, 4, 1, 15, 8, 3];
const ages2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  const newArray = ages.map(age => {
    if (age > 2) {
      return 16 + age * 4;
    } else {
      return age * 2;
    }
  });
  const avg = newArray.filter(age => age >= 18);
  return avg.reduce((x, y) => x + y) / avg.length;
};
console.log(calcAverageHumanAge(ages));
console.log(calcAverageHumanAge(ages2));

// Challenge 3

const calcAverageHumanAge2 = function (ages) {
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length);
};
console.log(calcAverageHumanAge2(ages));

// Challenge 4

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  } `
);

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 4.
// "Matilda and Alice and Bob's dogs eat too much!"
//  "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6.
// current > (recommended * 0.90) && current < (recommended * 1.10)
const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));

// 7.
console.log(dogs.filter(checkEatingOkay));

// 8.
// sort it by recommended food portion in an ascending order [1,2,3]
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);

// Data Transformations: map, filter, reduce
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const account1 = {
  owner: 'John Doe',
  movements: [
    1200, -600, 350, -800, 600, -1500, 200, 450, -400, 3000, -650, -130, 70,
    1300,
  ],
  interestRate: 1.2,
  pin: 1234,
};

const account2 = {
  owner: 'Jane Smith',
  movements: [
    10000, -500, -1500, -790, 6000, -2000, 8500, -30, 5000, 3400, -150, -790,
    -3210, -1000,
  ],
  interestRate: 1.5,
  pin: 4321,
};

const account3 = {
  owner: 'David Johnson',
  movements: [200, 1000, -300, -50, -1000, 500, 300, 800],
  interestRate: 1,
  pin: 2468,
};

const accounts = [account1, account2, account3];

// Map
const eurToUsd = 1.1;
const moveToUsd = movements.map(function (mov) {
  return mov * eurToUsd;
});

const moveUsd = movements.map(mov => mov * eurToUsd);
console.log(movements);
console.log(moveUsd);
console.log(moveToUsd);

const moveUSDfor = [];
for (const mov of movements) moveUSDfor.push(mov * eurToUsd);
console.log(moveUSDfor);

const movementDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementDescriptions);

// Filter
const deposits = movements.filter(x => x > 0);
console.log(deposits);

const withdrawal = movements.filter(x => x < 0);
console.log(withdrawal);

// Reduce
const balance = movements.reduce((x, y) => x + y, 0);
console.log(balance);

// find and findIndex (return the element for the first findings)
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

const index = movements.findIndex(mov => mov < 0);
console.log(index);

// Some and every (returns true or false)

// EQUALITY
console.log(movements.includes(-130));

// CONDITION
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

console.log(movements.every(mov => mov > 0));

// Seperate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

// flat and flatMap
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());
const arr2 = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arr2.flat(2));

const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((x, y) => x + y, 0);
console.log(overallBalance);

const balances = accounts
  .flatMap(acc => acc.movements)
  .reduce((x, y) => x + y, 0);
console.log(balances);

// Sort
// String
const owners = ['Jonas', 'Jack', 'Adam', 'Martha'];
console.log(owners.sort());

// Numbers
// console.log(movements.sort()); does not work
movements.sort((a, b) => a - b);
console.log(movements);

// Creating and Filling Arrays
const arrs = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Empty arrays + fill method
const x = new Array(7);
console.log(x);

x.fill(2, 3, 6);
console.log(x);

console.log(arrs.fill(23, 2, 5)); // will replace but cannot add

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

const movementsUI = Array.from(
  document.querySelectorAll('.movements_value'),
  el => Number(el.textContent.replace('€', ''))
);
console.log(movementsUI);

// Converting and Checking Numbers
console.log(23 === 23.0);

// Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.3333333
// Binary base 2 - 0 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// Conversion
console.log(Number('23'));
console.log(+'23');

// Parsing
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e23', 10));

console.log(Number.parseInt('  2.5rem  '));
console.log(Number.parseFloat('  2.5rem  '));

// console.log(parseFloat('  2.5rem  '));

// Check if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

// Checking if value is number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));

///////////////////////////////////////
// Math and Rounding
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 11, 2));

console.log(Math.min(5, 18, 23, 11, 2));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0...1 -> 0...(max - min) -> min...max
// console.log(randomInt(10, 20));

// Rounding integers
console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor('23.9'));

console.log(Math.trunc(23.3));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

// Rounding decimals
// toFixed always return String
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));

// Numeric Seperator
const diameter = 287_460_000_000;
console.log(diameter);

const price = 345_99;
console.log(price);

// BigInt
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1); // UNSAFE
console.log(2 ** 53 + 0); // UNSAFE

console.log(98749817287368327687416378648716n);
console.log(BigInt(98749817287368));
// console.log(Math.sqrt(16n)); DOESN'T WORK

// Operations
console.log(10000n + 10000n);
console.log(10n / 3n); // Division (3n)

// Exception
console.log(20n > 15);
console.log(15n === 15);
console.log(15n == 15);
console.log(15n == '15');
console.log(typeof 20n);

// Creating Dates
const now = new Date();
console.log(now);

console.log(new Date('Aug 02 2023 10:05:41'));
console.log(new Date('July 23, 2004'));
console.log(new Date('2019-11-01T13:15:33.035Z'));
console.log(new Date(2023, 9, 5, 12)); // The month (9) is zero-based and therfore is October
console.log(new Date(2023, 8, 23, 13, 12, 11));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getTime());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());

console.log(Date.now());
future.setFullYear(2040);
console.log(future);

// Operations With Dates
const futures = new Date(2037, 10, 19, 15, 23);
console.log(+futures);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1);

// Internationalizing Numbers (Intl)
const num = 3884764.23;

const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR',
  // useGrouping: false,
};

console.log('US:      ', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Syria:   ', new Intl.NumberFormat('ar-SY', options).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
);

// Timers
setTimeout(() => console.log('Here is your pizza!'));
