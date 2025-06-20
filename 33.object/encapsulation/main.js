// Public fields: Trường công khai, trường công cộng
// Private fields: Trường riêng tư
// Public method: Phương thức công khai
// Private method: Phương thức riêng tư

class wallet {
  #pin;
  #balance;
  #isPinEntered = false;
  constructor(bankName, pin) {
    this.bankName = bankName;
    this.#pin = pin;
    this.#balance = 0; // Tài khoản bằng 0 lúc tạo thẻ
  }

  // Phương thức gửi tiền vào tài khoản
  deposit(value) {
    if (!this.#isPinEntered) {
      console.log("Kiểm tra lại mã pin");
      return;
    }
    console.log("Nạp tiền thành công");
    this.#balance += value;
  }

  // =============================
  // private method
  #validatePin(pin) {
    return this.#pin === pin;
  }
  // public method
  enterPin(pin) {
    if (this.#validatePin(pin)) {
      this.#isPinEntered = true;
    } else {
      console.log("Pin sai");
    }
  }
  // =============================

  // Rút tiền
  withdraw(value) {
    if (!this.#isPinEntered) {
      console.log("Kiểm tra lại mã Pin");
      return;
    }
    if (value > this.#balance) {
      console.log("Số dư không đủ");
    } else {
      this.#balance -= value;
      console.log("Rút tiền thành công");
    }
  }

  // getter
  get balance() {
    if (!this.#isPinEntered) {
      console.log("Kiểm tra lại mã pin");
      return;
    }
    return this.#balance;
  }
}

// Tạo đối tượng
const MBbank = new wallet("MB bank", "123456");
console.log(MBbank.bankName);
// Nhập mã Pin
MBbank.enterPin("123456");
// console.log(MBbank.#balance);
MBbank.deposit(1000);
// console.log(MBbank.#balance);
MBbank.withdraw(150);
// console.log(MBbank.#balance);
