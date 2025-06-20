// Public fields: Trường công khai, trường công cộng
// Private fields: Trường riêng tư
// Public method: Phương thức công khai
// Private method: Phương thức riêng tư

class wallet {
  constructor(bankName, pin) {
    this.bankName = bankName;
    this.pin = pin;
    this._balance = 0; // Tài khoản bằng 0 lúc tạo thẻ
  }

  // Phương thức gửi tiền vào tài khoản
  deposit(value) {
    this._balance += value;
  }

  // Rút tiền
  withdraw(value) {
    if (value > this._balance) {
      console.log("Số dư không đủ");
    } else {
      this._balance -= value;
      console.log("Rút tiền thành công");
    }
  }
}

// Tạo đối tượng
const MBbank = new wallet("MB bank", "123456");
console.log(MBbank.bankName);
console.log(MBbank._balance);
MBbank.deposit(1000);
console.log(MBbank._balance);
MBbank.withdraw(150);
console.log(MBbank._balance);
