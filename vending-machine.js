//
// The vending machine has a predefined set of items that the user can
// purchase using cash. The vending machine has the following actions:

// User inserts cash <-
// User selects item <-
// Item dispensed if available
// Change dispensed

// Your task is:

// Design the structure of the program that controls the vending machine
// Implement a method dispenseChange()

const coinAmounts = { quarter: 25, dime: 10, nickle: 5, penny: 1 };
// could easily calculate this
// could also relie on the fact that keys in javascript objects are ordered,
// but that is not resilient to change
const coinKeyDecendingOrder = ['quarter', 'dime', 'nickle', 'penny'];

class VendingMachine {
  constructor(items, coins) {
    // { [name]: { centAmount, remaining } }
    this.items = items;
    this.newCents = 0;
    this.coins = coins;
    this.selectedItem = null;
  }

  insertCash(coins) {
    // convert coins to cents
    // add coins
    // handle errors
    let cents = 0;
    Object.keys(coins).forEach(coin => {
      const numCoins = coins[coin];
      this.coins[coin] += numCoins;
      cents += coinAmounts[coin] * numCoins;
    });
    this.newCents += cents;
    return this.tryToDespenseItem();
  }

  selectItem(item) {
    this.selectedItem = item;
    // handle error if item is not in items
    return this.tryToDespenseItem();
  }

  dispenseChange() {
    let changeRemaining = this.newCents;
    this.newCents = 0;
    const coinsToDispense = {};

    for (const coinKey of coinKeyDecendingOrder) {
      if (changeRemaining === 0) {
        return coinsToDispense;
      }
      const idealNum = Math.floor(changeRemaining / coinAmounts[coinKey]);
      const coinNum = Math.min(idealNum, this.coins[coinKey] || 0);

      if (coinNum > 0) {
        if (!coinsToDispense[coinKey]) {
          coinsToDispense[coinKey] = 0;
        }
        coinsToDispense[coinKey] += coinNum;
        changeRemaining -= coinNum * coinAmounts[coinKey];
      }
      this.coins[coinKey] -= coinNum;
    }

    return coinsToDispense;
  }

  tryToDespenseItem() {
    if (this.selectedItem) {
      const itemInfo = items[this.selectedItem];

      if (itemInfo && this.newCents >= itemInfo.centAmount) {
        this.newCents -= itemInfo.centAmount;
        this.items[this.selectedItem].remaining -= 1;

        return this.selectedItem;
      }
    }
  }
}

// coins
const items = { snickers: { centAmount: 175, remaining: 5 } };
const v = new VendingMachine(items, {
  penny: 50,
  dime: 2,
  quarter: 7,
});

v.insertCash({ quarter: 3, dime: 1, penny: 275 });
console.log(v.selectItem('snickers'));
console.log(v.selectItem('snickers'));
console.log(v.selectItem('snickers'));
console.log(v.insertCash({ quarter: 3, dime: 1, penny: 500 }));
// console.log(v.newCents)
console.log(v.coins);
console.log(v.dispenseChange());
