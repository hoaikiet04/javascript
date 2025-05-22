/* Tìm x, y khi biết tổng và hiệu của chúng */
let Tong = Number(prompt("Nhập tổng của x và y: "));
let Hieu = Number(prompt("Nhập hiệu của x và y: "));
let x, y;
x = (Tong + Hieu) / 2;
y = Tong - x;
console.log("Tổng là: " + Tong);
console.log("Hiệu là: " + Hieu);
console.log("x là: " + x);
console.log("y là: " + y);
