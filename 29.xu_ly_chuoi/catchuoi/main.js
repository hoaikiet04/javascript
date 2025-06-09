// String JS - cắt chuỗi string.slice() và string.substring() trong JS

/* 
1. slice(): cắt chuỗi từ vị trí bắt đầu đến vị trí kết thúc
Cú pháp: name.slice(start, end) // end không bắt buộc, nếu không nhập cắt đến hết chuỗi 

2. substring(): cắt chuỗi từ vị trí bắt đầu đến vị trí kết thúc 
Cú pháp: name.substring(start, end) // end không bắt buộc, nếu không nhập cắt đến hết chuỗi

3. trim(): loại bỏ khoảng trắng ở đầu và cuối chuỗi
let s11 = "     He 1lo world   ";
console.log(s11.length); //23
let s12 s11.trim();
console.log(s12); //15
console.log(s12.length);

.trimStart(): loại bỏ khoảng trắng ở đầu chuỗi
.trimEnd(): loại bỏ khoảng trắng ở cuối chuỗi    
*/

// let s1 = "0123456789";
// console.log(s1.slice(1, 5)); // 1234: cắt từ vị trí 1 đến vị trí 5 (sát end -1 chứ không phải end)
// console.log(s1.slice(1)); // 123456789: cắt từ vị trí 1 đến hết chuỗi hay s1.length

// Ví dụ vận dụng: chỉ cho phép nhập 10 kí tự, nếu quá thì tự cắt phần thừa và xuất chuỗi sau xử lý
/* let s1 = prompt("Nhập chuỗi bất kỳ: ");
if (s1.length > 10) {
  alert(
    `Bạn đã nhập quá ${s1.length - 10} kí tự, chuỗi sau khi cắt là: ${s1.slice(
      0,
      10
    )}`
  );
} */

// only one line
/* alert(
  `Chỉ 10 kí tự nên chuỗi của bạn là: ${prompt("Nhập chuỗi bất kỳ: ").slice(
    0,
    10
  )}`
); */

/* So sánh substring() vs slice()
1. Đối số truyền vào :
substring(start, end): Nhận vào hai tham số là vị trí bắt đầu và kết thúc trích xuất. 
Nếu end < start, chúng sẽ được đảo ngược - Tự động hiểu số nhỏ hơn là vị trí start
slice(start, end): Cũng nhận vào hai tham số là vị trí bắt đầu và kết thúc trích xuất. 
Nếu end < start, chuỗi sẽ được xem như rỗng. */
let s10 = "0123456789";
console.log("Sử dụng substring");
console.log(s10.substring(1, 4)); // "123"
console.log(s10.substring(4, 1)); // "123"
// "123" (đảo ngược vị trí start và end)
console.log("Sử dụng slice");
console.log(s10.slice(1, 4)); // "123"
console.log(s10.slice(4, 1)); //    ""
// (chuỗi rỗng, không đảo ngược vị trí start va end)

/* 
2. Xử lý với số âm:
substring(start, end): substring sẽ chuyển số âm thành 0
nếu end < start sau khi chuyển số âm thì nó sẽ đảo ngược chúng.

slice(start, end): cho phép sử dụng số âm để đếm từ cuối chuỗi. 
Số âm sẽ được hiểu là đếm từ cuối chuỗi về phía trước.
*/
s1 = "0123456789";
console.log("Sử dụng substring với đối số âm");
console.log(s1.substring(-3, -1));
// (chuyên số âm thành s10.substring(0, 0) " (chuỗi rồng)

// TH2: substring nếu end < start đảo ngược vị trí start vå end)
console.log("Trường hợp substring có 1 đối số âm, end < start ");
console.log(s1.substring(4, -5));
// 0123 //s10.substring(4, -5) -> s10.substring(4, 0) -> s10.substring(0, 4)
console.log("Sử dụng slice với đổi số âm");
console.log(s1.slice(-3, -1));
// 78 do: lấy từ Index -3 đến sát -1 (tức là -2)

// JavaScript String Methods concat(), toUpperCase(), toLowerCase(), charAt()
/* 1. concat(): Nối các chuỗi str2, str3 vào chuỗi str1 
  let newString = str1.concat(str2, str3, ...);
  Ví dụ:
  let firstName = "Hoài";
  let lastName = "Kiệt";
  let fullName = firstName.concat(" ", lastName);
  console.log(fullName); // Hoài Kiệt

  2. toUpperCase(): Chuyển đổi tất cả các ký tự trong chuỗi thành chữ hoa
  3. toLowerCase(): Chuyển đổi tất cả các ký tự trong chuỗi thành chữ thường

  4. charAt(index): Trả về ký tự tại vị trí index trong chuỗi
  Ví dụ:
  let s19 = "0123456789";
  console.log(s19.charAt(5)); // 5

  5. replace(): Thay thế giá trị (oldValue) đầu tiên được tìm thấy trong chuỗi bằng giá trị mới (newValue).
  let newString = replace(oldValue, newValue);
  thêm /g/ sau oldValue để thay thế tất cả các giá trị trong chuỗi
  6. repeat(): Lặp chuỗi count lần count: Số lần lặp lại chuỗi
  str.repeat(count);
*/

/* JavaScript String Methods indexOf , lastIndexOf, includes
1. indexOf(searchValue, [fromIndex]): Tìm kiếm (searchValue) xuất hiện lần đầu trong 
Nếu tồn tại trả về vị trí index, không tồn tại trả về -1
Ví dụ:
let s20 = "0123456789";
console.log(s20.indexOf("3")); // 3
console.log(s20.indexOf("3", 4)); // -1
2. lastIndexOf(searchValue,[endIndex]);
Tìm kiếm (searchValue) xuất hiện lần cuối trong chuỗi
Nếu tồn tại trả về vị trí index, không tồn tại trả về -1

3. includes(searchValue, [fromIndex]): Tìm kiếm (searchValue) xuất hiện trong chuỗi
let s21 = "01234569";
console.log(s21.includes("3")); // true
console.log(s21.includes("8"); // false
*/

/*
  String Methods JavaScript startsWith() endsWith trong JS, xử lý chuỗi trong JavaScript
  1. startsWith(search Value, [startIndex])
  Kiểm tra chuỗi gốc có bắt đầu bằng search Value không? 
  Đúng trả về true, sai trả về false 
  startIndex (tùy chọn): Vị trí bắt đầu tìm kiếm trong chuỗi. 
  Nếu bỏ trống: tìm kiếm sẽ bắt đầu từ đầu chuỗi.
  Ví dụ:
  let s22 = "0123456789";
  console.log(s22.startsWith("0")); // true
  console.log(s22.startsWith("1", 1)); // true
  console.log(s22.startsWith("1", 2)); // false
  2. endsWith(search Value, [endIndex])
  Kiểm tra chuỗi gốc có kết thúc bằng search Value không? 
  Đúng trả về true, sai trả về false 
  endIndex (tùy chọn): Vị trí kết thúc tìm kiếm trong chuỗi gốc. 
  Nếu bỏ trống: tìm kiếm đến hết chuỗi gốc
  Ví dụ: 
  let s23 = "0123456789";
  console.log(s23.endsWith("9")); // true   
  console.log(s23.endsWith("8", 9)); // true
  console.log(s23.endsWith("8", 8)); // false
  Ví dụ thực tế: Kiểm tra tên tập tin có kết thúc bằng đuôi .mp3
*/
