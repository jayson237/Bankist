'use strict';

// Data
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

const account4 = {
  owner: 'Lisa Williams',
  movements: [-200, 800, -300, -20, 50, 400, -460, 200, -200, 340],
  interestRate: 0.7,
  pin: 1357,
};

const account5 = {
  owner: 'William Garcia',
  movements: [-500, -100, 2000, -300, 600, -700, 1000, -1500],
  interestRate: 0.5,
  pin: 5678,
};

const account6 = {
  owner: 'Samantha Brown',
  movements: [100, -50, 500, -200, -100, 150, -300],
  interestRate: 1.1,
  pin: 7890,
};

const account7 = {
  owner: 'Jacob Davis',
  movements: [600, -200, 300, -400, 1000, -800, 500],
  interestRate: 0.9,
  pin: 3698,
};

const account8 = {
  owner: 'Olivia Martin',
  movements: [100, 200, 300, -400, 500, -600, 700, -800],
  interestRate: 1.3,
  pin: 2580,
};

const account9 = {
  owner: 'Ethan Wilson',
  movements: [500, -100, 200, -300, 100, -50, -200, 300, -400, 500],
  interestRate: 1.7,
  pin: 9012,
};

const account10 = {
  owner: 'Avery Lee',
  movements: [400, -500, 300, -200, 100, -50, 200, -100, 500],
  interestRate: 0.8,
  pin: 1470,
};

const accounts = [
  account1,
  account2,
  account3,
  account4,
  account5,
  account6,
  account7,
  account8,
  account9,
  account10,
];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Movement Container
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const transactionType = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${transactionType}">
          ${i + 1} ${transactionType}
        </div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// Generating Usernames
const generateUsername = function (accounts) {
  accounts.forEach(account => {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(x => x[0])
      .reduce((x, y) => x + y);
  });
};
generateUsername(accounts);
console.log(accounts);

// Display balance
const displayBalance = function (acc) {
  acc.balance = acc.movements.reduce((x, y) => x + y, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

// Display Summary
const calcDisplaySummary = function (acc) {
  const inc = acc.movements.filter(mov => mov >= 0).reduce((x, y) => x + y, 0);
  labelSumIn.textContent = `${inc}€`;

  const out = acc.movements.filter(mov => mov < 0).reduce((x, y) => x + y, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov >= 0)
    .map(depo => (depo * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((x, y) => x + y, 0);
  labelSumInterest.textContent = `${Number(interest.toFixed(2))}€`;
};

const updateUI = function (acc) {
  // Movements
  displayMovements(acc.movements);
  // Balance
  displayBalance(acc);
  // Account Summary
  calcDisplaySummary(acc);
};

// Event Handlers

let currAccount;
btnLogin.addEventListener('click', function (e) {
  // Prevent from submitting
  e.preventDefault();
  currAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value.trim()
  );

  if (currAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${
      currAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    updateUI(currAccount);
  } else {
    inputLoginPin.value = '';
    inputLoginPin.blur();
    alert('Please ensure that you have input the correct data');
  }
});

// Transfers
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    currAccount.balance >= amount &&
    receiverAcc.username !== currAccount.username
  ) {
    currAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currAccount);
    alert('Transfer Successful!');
  } else {
    alert('Transfer Unsuccessful :(');
  }
});

// Loan request
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  inputLoanAmount.value = '';
  if (
    amount > 0 &&
    currAccount.movements.some(mov => mov >= amount * 0.1 && mov > 0)
  ) {
    currAccount.movements.push(amount);
    alert('Loan request accepted!');
    updateUI(currAccount);
  } else {
    alert(
      'You must have at least have a deposit that is larger than 10% of the loan you requested'
    );
  }
});

// Close account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currAccount.username &&
    Number(inputClosePin.value) === currAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currAccount.username
    );
    accounts.splice(index, 1);
    alert('Account successfully closed!');
    containerApp.style.opacity = 0;
  } else {
    alert('Please check if you have the correct credentials!');
  }
});
