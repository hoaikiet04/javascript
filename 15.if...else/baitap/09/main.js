/* Viết chương trình nhập vào một năm dương lịch kiểm tra xem năm đó có phải năm nhuận hay không */
let year = Number(prompt("Nhập vào năm dương lịch: "));
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  alert(year + " là năm nhuận.");
} else {
  alert(year + " không phải là năm nhuận.");
}
