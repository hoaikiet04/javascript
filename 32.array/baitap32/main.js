/* Bài tập 32: 
Viết chương trình tạo mảng một chiều gồm các phần tử là số nguyên có n phần tử,
n do người dùng nhập vào.
*/

// Khai báo mảng rỗng ban đầu
let array = [];
let n = 0;

// Hàm check xem người dùng có nhập số nguyên dương hay không
while (true) {
  n = Number(
    prompt(`Mời nhập vào số phần tử của mảng
    Lưu ý: n > 0 và n là số nguyên dương`)
  );

  // kiểm tra n
  if (Number.isInteger(n) && n > 0) {
    break; // Thoát khỏi vòng lặp nếu n là số nguyên dương -- chỉ khi
  }
}

console.log(`Số phần tử của mảng là: ${n}`);

// Duyệt mảng và nhập các phần tử
for (let i = 0; i < n; i++) {
  console.log(i);
  let element = Number(prompt(`Nhập phần tử thứ ${i + 1} của mảng:`));
  array.push(element);
}

// In mảng
console.log(`Mảng đã nhập là: [${array.join(", ")}]`);
console.log(array); // In mảng ra console
