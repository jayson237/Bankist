'use strict';

// DATA
const account1 = {
  owner: 'John Doe',
  movements: [
    1200, -600, 350, -800, 600, -1500, 200, 450, -400, 3000, -650, -130, 70,
    1300,
  ],
  interestRate: 1.2,
  pin: 1234,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
    '2020-09-15T09:23:33.456Z',
    '2020-10-20T14:30:59.123Z',
    '2020-11-27T17:45:22.987Z',
    '2021-01-10T08:00:05.567Z',
    '2021-03-02T12:15:59.789Z',
    '2021-04-22T19:20:33.333Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jane Smith',
  movements: [
    10000, -500, -1500, -790, 6000, -2000, 8500, -30, 5000, 3400, -150, -790,
    -3210, -1000,
  ],
  interestRate: 1.5,
  pin: 4321,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
    '2020-09-15T08:30:45.123Z',
    '2020-10-20T16:45:27.946Z',
    '2020-11-28T09:12:53.784Z',
    '2021-01-06T21:03:17.629Z',
    '2021-03-12T11:55:39.582Z',
    '2021-05-01T07:22:22.319Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'David Johnson',
  movements: [200, 1000, -300, -50, -1000, 500, 300, 800],
  interestRate: 1,
  pin: 2468,
  movementDates: [
    '2022-02-15T08:32:16.543Z',
    '2022-02-18T16:49:27.742Z',
    '2022-03-22T10:54:31.106Z',
    '2022-03-28T14:23:05.305Z',
    '2022-06-30T17:41:09.892Z',
    '2022-07-25T12:06:49.933Z',
    '2022-07-18T09:24:57.537Z',
    '2022-08-20T22:48:42.401Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account4 = {
  owner: 'Lisa Williams',
  movements: [-200, 800, -300, -20, 50, 400, -460, 200, -200, 340],
  interestRate: 0.7,
  pin: 1357,
  movementDates: [
    '2021-12-11T20:49:59.371Z',
    '2021-12-18T09:01:20.894Z',
    '2022-01-10T08:26:53.417Z',
    '2022-02-15T14:03:10.123Z',
    '2022-02-19T20:51:26.829Z',
    '2022-02-24T02:07:43.516Z',
    '2022-03-01T09:35:20.212Z',
    '2022-03-08T13:42:56.908Z',
    '2022-03-13T20:20:13.605Z',
    '2022-03-19T03:58:30.301Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account5 = {
  owner: 'William Garcia',
  movements: [-500, -100, 2000, -300, 600, -700, 1000, -1500, 100],
  interestRate: 0.5,
  pin: 5678,
  movementDates: [
    '2021-01-05T09:15:33.035Z',
    '2021-02-15T14:48:16.867Z',
    '2021-03-20T11:04:23.907Z',
    '2021-04-10T17:18:46.235Z',
    '2021-05-08T19:33:06.386Z',
    '2021-06-22T15:43:26.374Z',
    '2021-07-11T20:49:59.371Z',
    '2021-08-18T09:01:20.894Z',
    '2021-09-23T12:12:12.120Z',
  ],
  currency: 'EUR',
  locale: 'es-ES',
};

const accounts = [account1, account2, account3, account4, account5];

// ELEMENTS
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
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((x, y) => x - y) : movements;
  movs.forEach(function (mov, i) {
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

// EVENT HANDLERS
let currAccount;
btnLogin.addEventListener('click', function (e) {
  // Prevent from submitting
  e.preventDefault();
  currAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value.toLowerCase().trim()
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

// Sort
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currAccount.movements, !sorted);
  sorted = !sorted;
});
