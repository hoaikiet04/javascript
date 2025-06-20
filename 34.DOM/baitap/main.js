/* 
classList.add() thêm một Class mới vào phần tử.
classList.remove() xoá một Class khỏi phần tử.
classList.toggle() loại bỏ một Class nếu nó đã tồn tại và thêm nó nếu chưa có.
classList.replace) thay thế một Class cũ bằng một Class mới.
classList.contains() kiểm tra xem phần tử có chứa một Class cụ thể không.
*/
// lấy phần tử cần tương tác
let element = document.getElementById("myElement");
element.classList.add("newClass");

// kiểm tra phần tử có lớp cụ thể nào không
console.log(element.classList.contains("newClass"));

// xóa một lớp khỏi phần tử
element.classList.remove("myClass");

// thay thế lớp cũ bằng một lớp mới
element.classList.replace("newClass", "abc");

// nếu lớp đã tồn tại, loại bỏ nó, nếu chưa thêm class vào phần tử
element.classList.toggle("toggleClass");

// xem các class trong phần tử
element.classList;

// Truy cập vào phần tử cha
element.parentElement;

// Truy cập vào thẻ con (có nhiều con sẽ trả về 1 HTMLCollection)
element.children;
element.children[1]; // Truy cập vào con cụ thể

// nextElementSibling: chọn phần tử anh em kế tiếp
element.children[1].nextElementSibling; // trả về children[2];

// previousElementSibling: chọn phần tử anh em phía trước
element.children[1].previousElementSibling; // trả về children[0];
