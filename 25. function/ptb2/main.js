function ptb2(a, b, c) {
  let delta = b ** 2 - 4 * a * c;
  if (delta < 0) {
    return "Phương trình vô nghiệm";
  } else if (delta == 0) {
    let x1 = -b / (2 * a);
    return `Phương trình có nghiệm kép x1 = x2 = ${x1}`;
  } else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    return `Phương trình có 2 nghiệm phân biệt x1 = ${x1} và x2 = ${x2}`;
  }
}

let a = parseFloat(prompt("Nhập a:"));
let b = parseFloat(prompt("Nhập b:"));
let c = parseFloat(prompt("Nhập c:"));
while (isNaN(a) || isNaN(b) || isNaN(c)) {
  alert("Vui lòng nhập số hợp lệ");
  a = parseFloat(prompt("Nhập a:"));
  b = parseFloat(prompt("Nhập b:"));
  c = parseFloat(prompt("Nhập c:"));
}

let result = ptb2(a, b, c);
alert(result);
