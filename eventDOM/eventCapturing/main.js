/*  Bubbling và Capturing
Bubbling : Sự kiện được phát đi từ phần tử đích lên cây DOM đến gốc (từ trong ra ngoài). Mặc
định {capture: false}
Capturing : Sự kiện được phát đi từ gốc của cây DOM đến phần tử đích (từ ngoài vào trong). nếu
{capture: true}
nó xuất hiện cả 3 theo ví dụ bubbling
*/

/* 
1. Dùng stopPropagation(); chỉ ngăn chặn sự kiện lan truyền từ con lên cha, 
không ngăn chặn sự kiện của cùng 1 element
ví dụ 1 child có 2 thằng child1 child2 thì nó không chặn được
2. Dùng stopImmediate Propagation(); ngăn chặn sự kiện của cùng 1 element
*/

/* Event Delegation
1. Ngăn submit mặc định của form
2. Khi nhấn submit thì thêm 1 li vào ul
*/
const form = document.querySelector("#form");
const list_item = document.getElementById("list_item");
form.addEventListener("submit", function (e) {
  e.preventDefault(); //ngan submit mặc định của form
  //lấy giá trị của ô username và message
  const username = document.getElementById("username").value;
  const message = document.getElementById("message").value;
  // tạo thẻ li
  const newLi = document.createElement("li");
  newLi.textContent = username + ": " + message;
  // thêm vào ul
  list_item.append(newLi);

  //reset form
  form.reset();
});

//3. Xóa phần tử li khi click vào, không dùng event delegation
// chọn tất cả thẻ li
const lis = document.querySelectorAll("li");
console.log(lis);
//duyệt qua danh sách li
// for (let li of lis) {
//   //lắng nghe sự kiện click vào thẻ li
//   li.addEventListener("click", function () {
//     //xoá thẻ li
//     li.remove();
//   });
// }

// Vấn đề: khi thêm 1 lì mới vào ul,
// thì lì đó không có sự kiện click
//Xóa phần tử là khi click vào dùng event delegation

list_item.addEventListener("click", function (e) {
  const li = e.target;
  //   li.remove();
  // kiểm tra xem thẻ click có phải li không
  if (li.tagName === "LI") {
    li.remove();
  }
});
