/* Khi muốn thực thi một đoạn code nào nó nhiều lần, thay vì phải copy đi copy lại đoạn code đó
dẫn đến chương trình bị trùng lặp code
=> Khi đó ta sử dụng hàm
– Hàm là 1 khối lệnh thực hiện 1 công việc hoàn chỉnh (module)
Hàm còn được gọi là chương trình con
Công dụng:
1. Chia nhỏ phân việc của dự án
2. Tái sử dụng: khi cần chỉ cần gọi lại chương trình con mà o cần phải viết lại */

// Ví dụ:
// Bước 1: Khai báo hàm
// function xinChao() {
//   console.log("Xin chào Hoài Kiệt");
// }

// // Bước 2: Gọi hàm
// xinChao(); // Gọi hàm
// xinChao(); // Gọi hàm

/*
let n = prompt("Nhập số tên bạn đi");
function xinChao(name) {
  alert("ní hảo " + name);
}
xinChao(n); // Gọi hàm
*/

// function với tham số parameter
/* let inputName = prompt("Nhập tên của bạn đi");
function xinChao(name) {
  alert("ní hảo " + name);
}
xinChao(inputName); // Gọi hàm
*/

function tinhTong(a, b) {
  return a + b;
}

let a = parseInt(prompt("Nhập điểm Toán"));
let b = parseInt(prompt("Nhập điểm Văn"));
let tong = tinhTong(a, b);
alert("Tổng điểm Văn và Toán là: " + tong);
alert(`Điểm trung bình của bạn là: ${tong / 2}`);

// trong trường hợp không có return thì hàm sẽ trả về undefined
// còn nếu có return thì hàm sẽ trả về giá trị của return
// return là từ dùng để trả về giá trị của hàm
