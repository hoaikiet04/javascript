// 17. Toán tử 3 ngôi trong js - JS Ternary operator - Hướng dẫn về toán tử ba ngôi js và cách áp dụng
// biến = điều kiện ? giá trị đúng : giá trị sai

// kiểm tra điều kiện nếu đúng thì lấy biểu thức 2, nếu sai thì lấy biểu thức 3
// bản chất rút gọn của if else
let num = 10;
let result = console.log(num > 5 ? "Lớn hơn 5" : "Nhỏ hơn bằng 5");

let diemtb = Number(prompt("Nhập điểm trung bình: "));
let xeploai =
  diemtb >= 8
    ? "Giỏi"
    : diemtb >= 6.5
    ? "Khá"
    : diemtb >= 5
    ? "Trung bình"
    : "Yếu";
console.log(xeploai);
