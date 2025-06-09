/* Bài tập 20: Viết chương trình đếm ngược thời gian theo từng giây (countdown)
Ví dụ: Nhập vào số giây, chương trình sẽ đếm ngược từ số giây đó về 0
*/

function countdown(minutes) {
  alert("Bắt đầu đếm ngược từ " + minutes + " phút");
  let seconds = minutes * 60;

  let countdownInterval = setInterval(function () {
    // Thân hàm
    let minutesLeft = Math.floor(seconds / 60); // Tính số phút còn lại 65/60 -- 1
    let secondsLeft = seconds % 60; // Tính số giây còn lại 65%60 -- 5

    // format số phút và giây hiển thị theo 01 02 03 ...
    let prefixedSecondFormat = secondsLeft < 10 ? "0" : "";
    console.log(`${minutesLeft}:${prefixedSecondFormat}${secondsLeft}`);

    if (seconds <= 0) {
      clearInterval(countdownInterval);
      alert("Đếm ngược kết thúc!");
    } else {
      seconds--; // Giảm số giây còn lại
    }
  }, 1000);
}

let timeInput = Number(prompt("Nhập số phút để đếm ngược:"));
// Gọi hàm
countdown(timeInput);
