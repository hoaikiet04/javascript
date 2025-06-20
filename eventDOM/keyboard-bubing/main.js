// const input = document.querySelector("#input");
// input.addEventListener("keydown", function () {

// });

// const form = document.querySelector("#login");
// const userName = document.querySelector("#name");
// // chọn thẻ ul cha
// const ul = document.querySelector("ul");
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log(userName.value);
//   const newLi = document.createElement("li");
//   newLi.innerText = userName.value;
//   ul.append(newLi);
// });

/* Tóm lại:
preventDefault() có thể ngăn chặn các hành vi mặc định của một sự kiện,
Form chỉ là 1 ví dụ cụ thể, các bạn có thể sử dụng preventDefault() trong nhiều trường hợp khác nhau.
Ví dụ, ngăn chặn thẻ ở chứa liên kết chuyển hướng trang
*/

// ngoài ra còn có sự kiện change: sự kiện xảy ra khi giá trị thay đổi và mất focus
// input: Đây là một sự kiện mà trình duyệt kích hoạt khi người dùng thực hiện bất
// kỳ hành động nhập liệu nào trên một phần tử HTML
// .target: xem content ô nhập liệu

// Event JS JavaScript Event Bubbling Cách Ngăn Chặn Với stopPropagation

const child = document.querySelector("#child");
const parent = document.querySelector("#parent");
const grandparent = document.querySelector("#grandparent");

// child.addEventListener("click", function () {
//   console.log("child clicked");
// });
// parent.addEventListener("click", function () {
//   console.log("parent clicked");
// });
// grandparent.addEventListener("click", function () {
//   console.log("grandparent clicked");
// });
/* Tuy chúng ta chỉ click vào thẻ con Child,
nhưng do các thẻ cha của nó cũng có sự kiện click nên khi click vào thẻ con thì sẽ lan ra các thẻ
cha của nó - Đây được gọi là Event Bubbling
 */

child.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("child clicked");
});
parent.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("parent clicked");
});
grandparent.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("grandparent clicked");
});
