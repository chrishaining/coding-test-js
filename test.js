var VendingMachine = function () {
  this.balance = 0;
  this.inventory = [
    {selector: "A", price: 65, count: 0},
    {selector: "B", price: 65, count: 0},
    {selector: "C", price: 65, count: 0},
  ]

};

VendingMachine.prototype.getBalance = function () {
  return this.balance;
};

let assert = require('assert');

describe('Vending Machine', function () {
  let machine

  beforeEach(function() {
    machine = new VendingMachine();
  });

  // describe('Balance of money inserted', function () {
  //   it('Is zero when initially powered up', function () {
  //     machine = new VendingMachine();
  //     assert.strictEqual(0, machine.getBalance())
  //   });
  // });

  //be able to add a coin to the vending (test by checking that the balance increases when we add a coin)


  //be able to return a coin (i.e. give change)

  //update the balance

  //has inventory that starts at 0
  describe('Balance of inventory', function () {
    it('no stock exists in the machine until added', function () {
      const totalInventory = machine.inventory.reduce((total, item) => {return total + item.count}, 0)
      assert.strictEqual(totalInventory, 0)
    });

  });


  //

});
