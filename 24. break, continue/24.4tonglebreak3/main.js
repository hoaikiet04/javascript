/* Bài tập JS 17:

Viết chương trình tính tổng các số lẻ từ 1 đến n, n nhập từ bàn phím
Nhập n = 7, Bỏ qua không cộng tống với số 3 => in ra kết quả
(gợi ý đáp án: 1+5+7=13)
Thứ break khi vòng lập chạy đến giá trị n=3
*/

let n = Number(prompt("Nhập số n đi:"));
while (!Number.isInteger(n) || n < 0 || n % 2 === 0) {
  n = Number(prompt("Nhập lại số lẻ đi má:"));
}
let sum = 0; // khai báo biến sum trước khi vào vòng lặp
if (n % 2 === 1) {
  for (let i = 1; i <= n; i += 2) {
    if (i === 3) {
      continue; // Bỏ qua số 3
      // break; // Dừng vòng lặp khi i = 3 ==> sum = 1 luôn
    }
    sum += i;
  }
}
alert(`Tổng các số lẻ từ 1 đến ${n} không tính 3 là: ${sum}`);
