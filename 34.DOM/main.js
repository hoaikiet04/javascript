/* 1. inner HTML
innerHTML là một thuộc tính của các phần tử HTML mà cho phép xem, 
hoặc sửa nội dung HTML bên trong một phần tử

2. getElementsByTagName()
Chọn các phần tử trên trang web dựa trên thẻ HTML li, ul, <div>, <p>, <a>...
Trả về 1 mảng chứa các phần tử có tagName được chỉ định
let element = document.getElementsByTagName("tagName");
*/
console.log("getElementsByTagName");
let li_item = document.getElementsByTagName("li");
console.log(li_item); // trả về mảng có các phần tử li
// Chúng ta có thể kiểm tra xem mảng có bao nhiêu phần tử
console.log(li_item.length);
li_item[2].innerHTML = "aaaaa";

/*
4.3 getElementsByClassName ()
Chọn các phần tử trên trang web dựa trên class name
Trả về 1 mảng chứa các phần tử có className được chỉ định
let element = document.getElementsByClassName ("className");
*/
console.log("getElementsByClassName");
let list_item = document.getElementsByClassName("list_4");
console.log(list_item);

/* 4.5 getElementById()
Cho phép bạn truy cập và thao tác với một phần tử HTML cụ thể trong trang web bằng cách sử dụng ID 
của phần tử. Trả về 1 phần tử duy nhất có id trùng lặp, nếu có nhiều id trùng chỉ trả về id đầu tiên 
(Tuy nhiên theo quy tắc bạn 0 được đặt 2 id trùng nhau trên cùng 1 trang.)
Nếu không tìm thấy trả về null
let element = document.getElementById('id'); */

/* 4.6 querySelector()
querySelector có thể chấp nhận bất kỳ bộ chọn CSS nào như id, class, tagName, 
hoặc thậm chí là bộ chọn CSS kết hợp (CSS (CSS Combinator) để chọn phần tử trên trang web
Phương thức này trả về phần tử đầu tiên trong document phù hợp với selector được chỉ định.
1. Chọn phân tử băng id:
document.querySelector (#heading_title)
2. Chọn phần tử bằng class:
document.querySelector ('list').
3. Để chọn phần tử <a> trong danh sách
document.querySelector('a).
*/
// Chọn phần tử có id là heading-title và thay đổi nội dung của nó
let title = document.querySelector(".heading-title");
console.log(title);
title.innerHTML = "HAha";

// chọn phần tử đầu tiên có lớp list để thay đổi
// let list_class = document.querySelector(".list");
// console.log(list_class);
// list_class.innerHTML = "Đã bị thay đổi";

/* querySelectorAll có thể chấp nhận bất kỳ bộ chọn CSS nào như id, class, tagName hoặc thậm chí 
là bộ chọn CSS kết hợp (CSS Combinator) để chọn phần tử trên trang web
Phương thức này trả về phần tử danh sách các phần tử trong document phù hợp với selector được chỉ định.
 */

/* getAttribute(): là phương thức trả về giá trị của thuộc tín
nằm trên phần tử HTML, nếu không tìm thấy trả về null */
const firstLink = document.querySelector("a");
console.log(firstLink);

if (firstLink) {
  linkHref = firstLink.getAttribute("href");
  console.log(linkHref);
} else {
  console.log("Không tìm thấy thẻ a");
}

// firstLink.setAttribute("target", "_blank");

const links = document.querySelectorAll("ul a");
console.log(links);

links.forEach((singeLink) => {
  singeLink.setAttribute("target", "_blank");
});

document.querySelector("h1").setAttribute("style", "color: pink");

// hasAttribute

const item1 = document.querySelector(".list");
console.log(item1.hasAttribute("class"));
const item2 = document.querySelector("li a");
console.log(item2.hasAttribute("href"));

// removeAttribute
item2.removeAttribute("style");

/* Thuộc tính textContent, innerHTML, innerText
Điểm chung: Cả ba đều sử dụng để get hoặc set với phần tử HTML chứa nội dung văn bản, như các phần tử <p>, <span>, <div>, v.v.
Diêm khác cơ bản :
textContent: Trả về nội dung nằm bên trong phần tử, bao gồm cả khoảng trắng, tab xuống dòng.....
innerText: Trả về văn bản mà người dùng có thể nhìn thấy trên trình duyệt, loại bỏ các phần tử được ẩn bằng CSS.
innerHTML: Trả về toàn bộ nội dung HTML của phần tử, bao gồm cả các thẻ HTML và cấu trúc của chúng.*/
