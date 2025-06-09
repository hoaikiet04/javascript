/* Bài tập 24: Nhập chuỗi từ bàn phím,
1. đếm xem có bao nhiêu ký tự thường 
2. Bao nhiêu ký tự in hoa
3. Bao nhiêu ký tự số4
4. Bao nhiêu space
*/
// Nhập chuỗi từ bàn phím
const inputString = prompt("Nhập chuỗi bất kỳ: ");

// khởi tạo các biến đếm
let lowerCaseCount = 0;
let upperCaseCount = 0;
let digitCount = 0;
let spaceCount = 0;
// Duyệt qua từng ký tự trong chuỗi
for (let i = 0; i < inputString.length; i++) {
  let char = inputString[i];
  if (char >= "a" && char <= "z") {
    lowerCaseCount++;
  } else if (char >= "A" && char <= "Z") {
    upperCaseCount++;
  } else if (char >= "0" && char <= "9") {
    digitCount++;
  } else if (char === " ") {
    spaceCount++;
  }
}

// In kết quả
console.log("Số ký tự thường:", lowerCaseCount);
console.log("Số ký tự in hoa:", upperCaseCount);
console.log("Số ký tự số:", digitCount);
console.log("Số ký tự space:", spaceCount);
