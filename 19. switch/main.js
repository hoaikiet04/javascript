// 19.1 JavaScript Switch Case_ Cơ bản và ví dụ minh họa cho người mới học - xuất dữ liệu nhiều dòng js

// switch (biểu thức) {
//     case giá trị1:
//         // Nếu biểu thức === giá trị1 thì thực hiện đoạn mã này
//         break;
//     case giá trị2:
//         // Nếu biểu thức === giá trị2 thì thực hiện đoạn mã này
//         break;
//     case giá trị3:
//         // Nếu biểu thức === giá trị3 thì thực hiện đoạn mã này
//         break;
//     default:
//         // Nếu không khớp với bất kỳ giá trị nào ở trên thì thực hiện đoạn mã này
//         break;
// }

/* let a = prompt("Nhập số nguyên dương: ");
switch (a % 2) {
  case 0:
    console.log("Số chẵn");
    break;
  case 1:
    console.log("Số lẻ");
    break;
  default:
    console.log("Không phải số nguyên");
    break;
} */
// có thể thay đổi các case thành các tháng để xử lý bài toán 1 tháng có bao nhiêu ngày

let a = Number(
  prompt(`Chọn cách tìm kiếm:
1. tìm theo tên
2. tim theo tác giả
3. tim theo nhà xuất bản
4. tim theo tiêu đề`)
);
switch (a) {
  case 1:
    alert("Bạn đã chọn Tìm theo tên");
    break;
  case 2:
    alert("Bạn đã chọn Tìm theo tác giả");
    break;
  case 3:
    alert("Bạn đã chọn Tìm theo nhà xuất bản");
    break;
  case 4:
    alert("Bạn đã chọn Tìm theo tiêu đề");
    break;
  default:
    alert("Lựa chọn của bạn không hợp lệ");
    break;
}
