// Bài 13: Các hàm toán học thông dụng
// 1. Hàm Math.sqrt(): Tính căn bậc 2 của một số
let a = Math.sqrt(16);
console.log(a); // 4

// 2. Hàm Math.pow(): Tính lũy thừa của một số
// let b = Math.pow(2, 3);
// console.log(b); // 8
let soC = 2;
let soD = 3;
let result = Math.pow(soC, soD);
console.log(`${soC} mũ ${soD} = ${result}`);

// 3. Hàm Math.abs(): Tính giá trị tuyệt đối của một số
let c = Math.abs(-5);
console.log(c); // 5

// 4. Hàm Math.ceil(): Làm tròn lên số nguyên gần nhất
let d = Math.ceil(4.2);
console.log(d); // 5

// 5. Hàm Math.floor(): Làm tròn xuống số nguyên gần nhất
let e = Math.floor(4.8);
console.log(e);

// 6. Hàm Math.round(): Làm tròn số đến số nguyên gần nhất 0.5 trở lên thành 1
let f = Math.round(7.5);
console.log(f);

// 7. Hàm .toFixed(): Làm tròn số đến số thập phân nhất định
let g = 5.6789;
let gRounded = g.toFixed(2); // Làm tròn đến 2 chữ số thập phân
console.log(gRounded); // 5.68
console.log(typeof gRounded); // 5.68 => string nó xuất ra kiểu string muốn sử dụng kiểu số thì phải ép kiểu lại

// 8. Hàm Math.min(): Tìm giá trị nhỏ nhất trong một dãy số
// 9. Hàm Math.max(): Tìm giá trị lớn nhất trong một dãy số
let num1 = 5;
let num2 = 10;
let num3 = 3;
let minValue = Math.min(num1, num2, num3);
console.log(`Giá trị nhỏ nhất là: ${minValue}`); // 3
let maxValue = Math.max(num1, num2, num3);
console.log(`Giá trị lớn nhất là: ${maxValue}`); // 10
