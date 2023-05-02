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

// Data Transformations: map, filter, reduce
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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

// Find (return true or false for the first findings)
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);
