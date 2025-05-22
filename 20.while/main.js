// 20. JavaScript while Loop - Vòng lặp while trong JavaScript

// while (condition) {
//     // code block to be executed if the condition is true
// }
let i = 1; // Initialize a variable
while (i <= 5) {
  console.log(i);
  i++;
}

/* Viết chương trình nhập vào số n từ bàn phím.
n phải là số nguyên nằm trong khoảng từ 1 đến 99 Nhập sai bắt nhập lại */

let n = prompt("Nhập vào số nguyên n (1-99): ");
while (n < 1 || n > 99 || isNaN(n) || n % 1 !== 0) {
  n = prompt(
    "Số bạn nhập không hợp lệ, vui lòng nhập lại số nguyên n (1-99): "
  );
}
alert(" Số nguyên bạn vừa nhập là:" + n);
