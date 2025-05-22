// Bài 23: Vòng lặp for trong JavaScript

/* 
    for (biến khởi tạo; điều kiện; bước nhảy) {
        // Câu lệnh
    } 
*/

/*
ví dụ:
    for (let i = 0; i < 5; i++) {
        console.log(i); // 0 1 2 3 4
    }

Ví dụ: In ra màn hình các số chẵn từ 0 đến 10
    for (let i = 0; i <= 10; i += 2 ) {
    console.log(i); // 0 2 4 6 8 10
    }

Ví dụ: Tính tổng các số chẵn rừ 1 đến 10 
let tong = 0;
for (let i = 0; i <= 10; i += 2 ) {
    tong += i; // tong = tong + i
}

*/

// break: Thoát khỏi vòng lặp

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Thoát khỏi vòng lặp khi i = 5
  }
  console.log(i); // 0 1 2 3 4
}

let i = 0;
while (i < 10) {
  i++;
  if (i === 5) {
    break; // Dừng vòng lặp khi i = 5
  }
  console.log(i); // 1 2 3 4
}

// continue: Bỏ qua vòng lặp hiện tại và tiếp tục với vòng lặp tiếp theo
for (i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // Bỏ qua các số chẵn
  }
  console.log(i); // 1 3 5 7 9
}

while (i < 10) {
  i++;
  if (i % 2 === 0) {
    continue; // Bỏ qua các số chẵn
  }
  console.log(i); // 1 3 5 7 9
}
