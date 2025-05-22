/* 
Đệ Quy trong JS
– Đệ quy là cách dùng hàm để tự gọi lại chính nó
– Để giải bằng đệ quy cần 2 điều kiện :
1. Điểm dừng của bài toán
2. Quy luật của bài toán
Ví dụ 1: tính N!=N*(N-1)!..1
Quy luật: 5! = 5*4!
4!=4*3! => n! = n*(n-1)!
Điểm dừng: n=0, hoặc n=1 giai thừa luôn bằng 1
*/

// Tính giai thừa bằng đệ quy

/* function giaiThua(n) {
  if (n === 1 || n === 0) {
    return 1;
  } else {
    return n * giaiThua(n - 1);
  }
}

let result = giaiThua(5);
console.log(result); // 120
*/
// 5! = 5*(giaiThua(4))
// 4! = 4*(giaiThua(3))
// 3! = 3*(giaiThua(2))
// 2! = 2*(giaiThua(1))
// 1! = 1 n = 1 return 1 thoát đệ quy

// Tính fibonacci bằng đệ quy
function f(n) {
  if (n === 1 || n === 2) {
    return 1;
  } else if (n <= 0) {
    return "Không có fibonacci âm";
  } else {
    return f(n - 1) + f(n - 2);
  }
}

let result = f(11);
console.log(result); // 5
