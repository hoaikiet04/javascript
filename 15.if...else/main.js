// 16. if, else trong JS , Sử dụng VSCode và Chrome Developer Tools để debug JavaScript như thế nào

// ví dụ xuất thông báo nhập điểm
// let diem = Number(prompt("Nhập điểm của bạn: "));
// if (diem >= 5) {
//   alert("Bạn đã đậu!");
// } else {
//   alert("Bạn đã rớt!");
// }

// bài tập 16.2
/*
Nhập vào điểm trung bình, in ra xếp loại của học sinh 
Giỏi: 8.0 >= dtb <= 10.0
Khá: 6.5 >= dtn < 8.0
Trung bình: 5.0 >= dtb < 6.5
Yếu: 0 < dtb < 5.0
*/
let dtb = Number(prompt("Nhập điểm trung bình của bạn: "));
if (dtb <= 10 && dtb >= 8) {
  alert("Bạn xếp loại Giỏi");
} else if (dtb < 8 && dtb >= 6.5) {
  alert("Bạn xếp loại Khá");
} else if (dtb < 6.5 && dtb >= 5) {
  alert("Bạn xếp loại Trung bình");
} else if (dtb < 5 && dtb > 0) {
  alert("Bạn xếp loại Yếu");
} else {
  alert("Điểm không hợp lệ");
}
