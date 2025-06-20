/* addEventListener: Sử dụng để gọi Function (hàm) khi mà sự kiện được chỉ định xảy ra
Cú Pháp addEventListener: element addEventListener(event, function, options)
element: phần tử muốn thêm sự kiện
event: tên sự kiện
function: hàm xử lý sự kiện
options: tùy chọn
*/

//1. Lấy phần tử
const btn = document.getElementById("btn3");

//2. Thêm sự kiện
//2.1 sử dụng với function expression
// btn.addEventListener("click", function () {
//   alert("Bạn đã click u i a");
// });

// 2.2 function declaration
function handleClick() {
  alert("Bạn đã click u i a");
}
btn.addEventListener("click", handleClick, { once: true });

function handleClick2() {
  alert("Bạn đã click u i a 2");
}
btn.addEventListener("click", handleClick2);

const btn4 = document.getElementById("btn4");
btn4.addEventListener("click", handleClick);
btn4.addEventListener("click", handleClick2);

// // 2.3 Sử dụng với arrow function
// btn.addEventListener("click", () => {
//   alert("Bạn đã click u i a ");
// });

// Có thể xóa sự kiện
btn4.removeEventListener("click", handleClick);
