// hàm thay đổi màu ngẫu nhiên rgb

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// chọn các phần tử button ở trên trang
const btnList = document.querySelectorAll(".btn");

// mỗi lần bạn click thay đổi màu nền và màu chữ của button
// for (let btn of btnList) {
//   if (btn instanceof HTMLElement) {
//     btn.addEventListener("click", function () {
//       btn.style.backgroundColor = randomColor();
//       btn.style.color = randomColor();
//     });
//   }
// }

const titleList = document.querySelectorAll(".title");
// for (let title of titleList) {
//   if (title instanceof HTMLElement) {
//     title.addEventListener("mouseover", function () {
//       title.style.backgroundColor = randomColor();
//       title.style.color = randomColor();
//     });
//   }
// }

function changeColor() {
  this.style.backgroundColor = randomColor();
  this.style.color = randomColor();
}

for (let btn of btnList) {
  btn.addEventListener("click", changeColor);
}
for (let title of titleList) {
  title.addEventListener("mouseover", changeColor);
}
