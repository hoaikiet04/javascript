//https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/1.png
// 36.15 Dom -ví dụ vận dụng
//Chọn phần tử cha
const container = document.getElementById("container");
let baseUrl =
  "https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/";
// tạo phần tử con mới
// const newImg = document.createElement("img");
// newImg.src = ${baseUrl}4.png';
// // thêm phần tử con vào container
// container.appendChild(newImg);
//Bài toán 2: thêm 151 ảnh vào container
for (let i = 1; i <= 150; i++) {
  // tạo phân tử con mới
  const newImg = document.createElement("img");
  newImg.src = `${baseUrl}${i}.png`;
  // thêm phân tử con vào container
  container.appendChild(newImg);
}
