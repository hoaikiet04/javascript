/* Bài tập JS 15:

Viết chương trình nhập vào số nguyên n, in ra kết quả n!
1. Dùng vòng lập for
2. Dùng vòng lặp while
*/

// 1. Dùng vòng lặp for
/* let n = Number(prompt("Nhập số nguyên dương n:"));
while (!Number.isInteger(n) || n < 0) {
  n = parseInt(
    prompt("Số bạn nhập không hợp lệ. Vui lòng nhập lại số nguyên dương n:")
  );
}
let giaiThua = 1;
for (let i = 1; i <= n; i++) {
  giaiThua *= i;
}
console.log(n + "! = " + giaiThua);

*/

// 2. Dùng vòng lặp while
let n = Number(prompt("Nhập số nguyên dương n:"));
while (!Number.isInteger(n) || n < 0) {
  n = parseInt(
    prompt("Số bạn nhập không hợp lệ. Vui lòng nhập lại số nguyên dương n:")
  );
}
let giaiThua = 1;
let i = 1;
while (i <= n) {
  giaiThua *= i;
  i++;
}
console.log(n + "! = " + giaiThua);
