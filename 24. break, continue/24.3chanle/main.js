/* Bài tập 35 16:
Viết chương trình nhập nhập số a từ bàn phím,
Nếu a chẵn thì tính tổng các số chẵn từ 0 đến a
Nếu a lẻ thì in ra dòng chữ “tôi ở tỉnh tổng số lẻ, bye bye" và thoát chương trình
*/
let n = Number(prompt("Nhập số a đi:"));
while (!Number.isInteger(n) || n < 0) {
  n = Number(prompt("Nhập số lại đi má:"));
}
if (n % 2 === 1) {
  alert("Tôi không tính tổng số lẻ, bye bye");
} else {
  let sum = 0;
  for (let i = 0; i <= n; i += 2) {
    sum += i;
  }
  alert(`Tổng các số chẵn từ 0 đến ${n} là: ${sum}`);
}
