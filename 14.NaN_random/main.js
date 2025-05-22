// 14. Làm rõ hàm Number, isNaN và Number.isNaN trong JavaScript

// 1. Hàm Number
// Number(value) chuyển đổi giá trị thành kiểu số (number).
// Nếu không thể chuyển đổi, nó sẽ trả về NaN (Not a Number).
var a = "123";
var num = Number(a);
console.log(`num, kiểu dữ liệu là ${typeof num}`); // 123

var b = "abc";
var num2 = Number(b);
console.log(num2); // NaN
console.log(`num2, kiểu dữ liệu là ${typeof num2}`); // NaN

// 2. Hàm isNaN
// isNaN(value) kiểm tra xem giá trị có phải là NaN hay không.
// Nếu giá trị là NaN, nó sẽ trả về true, ngược lại trả về false.

var c = 123;
var num3 = isNaN(c);
console.log(`Giá trị của num3 là: ${num3}`); // false

// 3. Hàm Number.isNaN
// Number.isNaN(value) kiểm tra xem giá trị có phải là NaN hay không.

var d = NaN;
console.log(`Giá trị của d là: ${Number.isNaN(d)}`); // NaN
console.log(Number.isNaN("abc" / "bcd")); // true
console.log(Number.isNaN(0 / 0)); // true

// 4. Math.random
// Math.random() trả về một số ngẫu nhiên trong khoảng [0, 1).
let randomValue = Math.random();
console.log(`Giá trị ngẫu nhiên là: ${randomValue}`);

// random số lớn hơn 1
let randomValue2 = Math.random() * 10;
console.log(`Giá trị ngẫu nhiên lớn hơn 1 là: ${randomValue2}`);

// random số lớn hơn 10 nhỏ hơn 100
let randomValue3 = Math.random() * 100;
console.log(`Giá trị ngẫu nhiên lớn hơn 10 là: ${randomValue3}`);

// random số nguyên trong khoảng [10, 100)
let randomValue4 = parseInt(Math.random() * 100);
console.log(`Giá trị ngẫu nhiên là: ${randomValue4}`);
