/* Viết chương trình:
Tính tổng S= 1! + 2! + 3! + .... + 10! */

let n = 10;
let s = 0;
for (let i = 1; i <= n; i++) {
  let giaiThua = 1;
  for (let a = 1; a <= i; a++) {
    giaiThua *= a;
  }
  s += giaiThua;
}
console.log(`Tổng của S là ${s}`);
