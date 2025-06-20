/* 
Thuộc tính textContent, innerHTML, innerText
Điểm chung: Cả ba đều sử dụng để get hoặc set với phần tử HTML chứa nội dung văn bản, như các phần tử <p>, <span>, <div>, v.v.
Điểm khác cơ bản :
textContent: Trả về nội dung nằm bên trong phần tử, bao gồm cả khoảng trắng, tab xuống dòng.....
innerText: Trả về văn bản mà người dùng có thể nhìn thấy trên trình duyệt, loại bỏ các phần tử được ẩn bằng CSS.
innerHTML: Trả về toàn bộ nội dung HTML của phần tử, bao gồm cả các thẻ HTML và cấu trúc của chúng.
*/

let elm = document.getElementById("demo");

// textContent
console.log("textContent:");
console.log(elm.textContent);
// innerText
console.log("innerText:");
console.log(elm.innerText);
// innerHTML
console.log("innerHTML:");
console.log(elm.innerHTML);

let elm2 = document.getElementById("demo2");

elm2.innerHTML = "<p><i>Ha</i></p>";

// Thuộc tính .style cho phép bạn truy cập và thay đổi các thuộc tính CSS của một phần tử HTML

let heading = document.querySelector("h1");
// Thay đổi style của h1 trên giao diện
// heading.style.backgroundColor = "cyan";
// heading.style.fontSize = "46px";
// heading.style.color = "red";

Object.assign(heading.style, {
  backgroundColor: "cyan",
  color: "red",
  fontSize: "46px",
});

/* Thuộc tính.style cho phép bạn truy cập để xem inline CSS của phần tử
window.getComputedStyle(): Phương sử dụng để lấy giá trị của Css sau khi trình duyệt xử lý tính
toán.
Giá trị tính toán này là các giá trị cuối cùng mà trình duyệt áp dụng cho phần tử sau khi đã tính 
toán tất cả các quy tắc CSS, bao gồm các quy tắc từ tệp CSS, các quy tắc nội tuyến, và các giá trị mặc định của trình duyệt.

*/
let buttons = document.querySelectorAll(".btn");
//duyệt for để lấy các phần tử
for (let btn of buttons) {
  if (btn instanceof HTMLElement) {
    btn.style.backgroundColor = "blue";
    btn.innerHTML = "Click me";
    btn.style.fontSize = "2em";
    btn.style.color = "yellow";
  }
}
