// Xử lý Chuỗi trong JS - index chuỗi trong js, và kiểm tra độ dài chuỗi js - length

/*
1. Khái niệm: Trong js string(Chuỗi) là tập hợp các ký tự, ví dụ như
chữ cái, số, hoặc ký tự đặc biệt. 

2. Khởi tạo bằng '' "" ``
``: có thể viết nhiều dòng hoặc dùng \n để xuống dòng
console.log(typeof s1); // string: kiểm tra kiểu dữ liệu

3. Quy tắc về index trong chuỗi
let s1 = "John";
console.log(s1[0]); // J: lấy ký tự đầu tiên
console.log(s1[1]); // o: lấy ký tự thứ 2

4. Thuộc tính length: kiểm tra độ dài của chuỗi
let s1 = "John";
console.log(s1.length); // 4: độ dài của chuỗi

or cách khác
let s1 = "John";
let doDai = s1.length;
console.log("Độ dài của chuỗi là " + doDai); // 4: độ dài của chuỗi
console.log("Độ dài của chuỗi là " + s1.length); // 4: độ dài của chuỗi
Ví dụ vận dụng: kiểm tra độ dài của chuỗi
*/

let message = prompt("Nhập vào một chuỗi bất kỳ: ");
alert(
  `Bạn đã chuỗi ${message} có ${message.length} kí tự và còn lại ${
    140 - message.length
  } kí tự nữa`
); // 4: độ dài của chuỗi
