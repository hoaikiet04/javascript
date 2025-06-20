/*
map() Dược dùng để tạo ra một mảng mới từ mảng ban đầu bằng cách áp dụng một hàm (callback) 
cho mỗi phần tử của mảng đó. Điều này giúp ta chuyển đổi, xử lý dữ liệu một cách dễ dàng mà 
không làm thay đổi mảng gốc
let newArray = array.map(
function(currentValue, index, arr) {
// return giá trị mới cho phần tử của mảng mới
}, thisArg);
➤ currentValue: Giá trị của phần tử hiện tại.
➤ index (tuỳ chọn): Vị trí của phần tử hiện tại.
➤ arr (tuỳ chọn): Mảng gốc.
➤ thisArg (tuỳ chọn): Giá trị dùng làm this khi gọi callback.
*/

// Ví dụ: Nhân đôi giá trị của phần tử trong mảng
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function (numbers) {
  return numbers * 2;
});

console.log(doubled);

// Ví dụ: chuyển đổi các mảng "đối tượng thành các mảng tên
const users = [
  { id: 1, name: "Hùng", age: 25 },
  { id: 2, name: "My", age: 35 },
  { id: 3, name: "Anh", age: 15 },
];

// const names = users.map(function (abc) {
//   return abc.name;
// });
const names = users.map((abc) => abc.name);
console.log(names);

//ví dụ 3: sử dụng đầy đủ tham số currentValue, index và arr
const M = [10, 20, 30, 40];
const result = M.map(function (currentValue, index, arr) {
  console.log(`index: ${index}`);
  console.log(`gia tri hien tai: ${currentValue}`);
  console.log(`mang goc: ${arr}`);
  return currentValue / 10;
});
console.log(result);
