//24.8 giai bai tap 21 Kiểm tra số nguyên tổ
/* Bài tập 35 21:
Viết chương trình nhập nhập số nguyên a> 0 từ bàn phím
Cho biết đó có phải số ng tố
Kết thúc chương trình hỏi người dùng:
(số nguyên tố là số 1, và chỉ chia hết cho 1 và chính nó)
Ví dụ số nguyên tố: 3, 5, 7
Bạn có muốn tiếp tục sử dụng phần mềm không?
nguyên chọn không thì thoát chương trình
*/
while (true) {
  // Bước 1: Nhập số nguyên dương từ bàn phím
  let n = Number(prompt("Nhập số nguyên a:"));

  // Bước 2: Kiểm tra số nguyên dương
  while (!Number.isInteger(n) || n <= 0) {
    n = Number(prompt("Nhập lại số nguyên a:"));
  }

  // Bước 3: Kiểm tra số nguyên tố
  let isPrime = true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }

  // Bước 4: In kết quả
  if (isPrime) {
    alert(n + " là số nguyên tố");
  } else {
    alert(n + " không phải là số nguyên tố");
  }

  // Bước 5: Hỏi người dùng có muốn tiếp tục không
  let answer = prompt(`
    Bạn có muốn tiếp tục sử dụng phần mềm không? 
    Nhập "no" để thoát, bấm phím bất kỳ để tiếp tục
  `);

  if (answer.toLowerCase === "no") {
    alert("Cảm ơn bạn đã sử dụng phần mềm");
    break;
  }
}
// .toLowerCase() là phương thức của String, nó sẽ chuyển đổi tất cả các ký tự trong chuỗi thành chữ thường
