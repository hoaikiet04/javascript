/* Dom event:
Là chìa khoa để tạo ra bất kỳ loại trang web tương tác nào, 
giúp phản hồi lại những gì người dùng tương tác trên trang.
Các tương tác phổ biến như:
1. Clicks - Nhấp chuột
2. Drags - Kéo
3. Drops - Thả
4. Hovers - Di chuột
5. Scrolls - Cuộn trang
6. Form Submission - Gửi biểu mẫu
7. Key Presses - Nhấn phím
8. Focus/Blur - Tiêu điểm/Mất tiêu điểm
9. Mouse Wheel - Bánh xe chuột
10. Double Click - Nhấp đúp
11. Copying - Sao chép
12. Pasting - Dán
13. Audio Start - Bắt đầu âm thanh
14. Screen Resize - Thay đổi kích thước màn hình
15. Printing - In ấn */

/* Inline Event là một cách đơn giản để thêm sự kiện vào một phần tử HTML bằng cách sử dụng thuộc tính của phần tử đó. 
Trong thuộc tính này, bạn có thể chỉ định một đoạn mã JavaScript sẽ được thực thi khi sự kiện xảy ra. 
Nhược điểm của Inline Event
Khó quản lý: Khi ứng dụng trở nên phức tạp, việc quản lý sự kiện trực tiếp trong HTML sẽ trở nên khó khăn.
Tính tái sử dụng kém: Mã JavaScript được gắn trực tiếp vào HTML, khó tái sử dụng.
onclick, onDbClick, onmouseover, onmouseleave, onkeypress,
*/

// 1. Hàm xác định phần tử có id là btn
// const button1 = document.getElementById("btn");

// 2. gán sự kiện click cho bt, sử dụng function expression
// button1.onclick = function () {
//   alert("U i a");
// };

// dùng function declaration khai báo hàm, sau đó gán hàm cho sự kiện click
// function clickHandler() {
//   alert("U I A");
// }

// button1.onclick = clickHandler;

// // hoặc dùng arrow function
// button3.onclick = () => {
//   alert("Bạn đã click vào button");
// };

// Ví dụ khác
function mouseOver() {
  document.getElementById("message").textContent = "Mouse is over the button!";
}

function mouseOut() {
  document.getElementById("message").textContent = "Mouse left the button!";
}

function setUp() {
  var button = document.getElementById("btn2");
  button.onmouseover = mouseOver;
  button.onmouseout = mouseOut;
}

window.onload = setUp;

/* Ưu - Nhược điểm DOM Level 0 Event Handling
Ưu Điểm:
Đơn giản và dễ hiểu.
Phù hợp cho các dự án nhỏ và cho người mới học.
Nhược Điểm:
Không thể gán nhiều sự kiện cho cùng một phần tử và cùng một loại sự kiện.
Khó bảo trì khi số lượng phần tử và sự kiện lớn.
*/
