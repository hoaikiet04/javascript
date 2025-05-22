/* Viết chương trình cho người dùng nhập vào 1 tháng bất kỳ
từ 1 – 12 => Cho biết tháng đó có bao nhiêu ngày ?
Gợi ý :
Tháng 1,3,5,7,8,10,12 có 31 ngày
Tháng 4,6,9,11 có 30 ngày
Nếu tháng 2 thì yêu cầu nhập thêm năm:
+ nếu năm nhuận thì tháng 2 có 29 ngày
+ năm không nhuận thì tháng 2 có 28 ngày */

let month = Number(prompt("Nhập tháng từ tháng 1 đến tháng 12: "));
if (month === 2) {
  let year = Number(prompt("Nhập năm: "));
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    alert("Tháng 2 có 29 ngày.");
  } else {
    alert("Tháng 2 có 28 ngày.");
  }
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
  alert("Tháng " + month + " có 30 ngày.");
} else if (month >= 1 && month <= 12) {
  alert("Tháng " + month + " có 31 ngày.");
} else {
  alert("Tháng không hợp lệ. Vui lòng nhập tháng từ 1 đến 12.");
}
