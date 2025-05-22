// Bài 1: Viết hàm tính giai thừa của một số nguyên dương n
// Dùng for
/* let n = Number(prompt("Nhập số nguyên dương"));
while (!Number.isInteger || n < 0) {
  n = Number(prompt("Vui lòng nhập số nguyên dương"));
}

function giaiThua(n) {
  let gt = 1;
  for (let i = 1; i <= n; i++) {
    gt *= i;
  }
  return gt;
}

let giaiThuaN = giaiThua(n);
alert(`Giai thừa của ${n} là: ${giaiThuaN}`); */

// Dùng while
let giaiThua = function (n) {
  let gt = 1;
  let i = 1;
  while (i <= n) {
    gt *= i;
    i++;
  }
  return gt;
};

let n = Number(prompt("Nhập số nguyên dương"));
while (!Number.isInteger(n) || n < 0) {
  n = Number(prompt("Vui lòng nhập số nguyên dương"));
}
let result = giaiThua(n);
alert(`Giai thừa của ${n} là: ${result}`);
