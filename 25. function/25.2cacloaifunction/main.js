// 25.2 Các cách Khai báo Hàm trong JavaScript - Function Declaration vs Function Expression

// 1. Function Declaration
/* 
function tenHam() {
 // code    
}
Ví dụ:
function tinhTong(a, b) {
  return a + b;
}
let kq = tinhTong(2, 3);
console.log(kq); // 5
*/

// 2. Function Expression
/*
let tenHam = function() {
  // code
  // return someValue;
}
Ví dụ:
let tinhTong = function(a, b) {
  return a + b;
}
let kq = tinhTong(2, 3);
console.log(kq); // 5
*/

// 3. Arrow Function
// Arrow Function là một cách viết ngắn gọn hơn của Function Expression
/*
let tenHam = () => {
  // code
  // return someValue;
}
Ví dụ:
let tinhTong = (a, b) => a + b;
console.log(tinhTong(2, 3)); // 5
 */

// Functions Calling Other Functions
// là một khái niệm mà một hàm có thể gọi một hoặc nhiều hàm khác để thực hiện các tác vụ cụ thể.
// Điều này giúp chia nhỏ chương trình thành các phần nhỏ, dễ quản lý và tái sử dụng.

// Hàm thực hiện phép cộng
function cong(a, b) {
  return a + b;
}

// Hàm thực hiện phép nhân
function nhan(x, y) {
  return x * y;
}

function tinhTongVaTich(num1, num2, num3) {
  // Gọi hàm để tính tổng
  let sum = cong(num1, num2);
  // Gọi hàm để tính tích
  let product = nhan(num3, sum);
  return product;
}

// Sử dung hàm
console.log(tinhTongVaTich(2, 3, 4)); // 20
