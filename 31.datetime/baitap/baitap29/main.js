/* Bài tập 29: Viết chương trình nhập vào năm sinh và in ra số tuổi
kiểm tra điều kiện năm sinh hợp lệ phải là số nguyên lớn hơn không
*/

function calculateAge() {
  // ép kiểu dữ liệu nhập vào thành số nguyên
  let yearOfBirth = Number(inputYear);
  // kiểm tra điều kiện năm sinh hợp lệ
  if (
    isNaN(yearOfBirth) ||
    yearOfBirth <= 0 ||
    !Number.isInteger(yearOfBirth)
  ) {
    console.log(
      "Năm sinh không hợp lệ. Vui lòng nhập một số nguyên lớn hơn 0."
    );
    return;
  }

  // lấy năm hiện tại
  let currentYear = new Date().getFullYear();
  // tính toán tuổi
  let age = currentYear - yearOfBirth;
  alert(`Bạn hiện tại ${age} tuổi.`);
  console.log(`Bạn hiện tại ${age} tuổi.`);
}

let inputYear = prompt("Nhập vào năm sinh của bạn:");
// gọi hàm tính tuổi
calculateAge(inputYear);
