/* Date and Time trong JavaScript
1. Tạo một đối tượng Date: sử dụng new Date() để tạo một đối tượng date mới
let currentDate = new Date(); // Tạo đối tượng Date hiện tại
console.log(typeof currentDate); // Kiểm tra kiểu dữ liệu của đối tượng Date -- sẽ là "object"
console.log(currentDate); // In ra đối tượng Date

const year = currentDate.getFullYear(); // Lấy năm
const month = currentDate.getMonth() + 1; // Lấy tháng (0-11, nên cộng thêm 1)  
const day = currentDate.getDate(); // Lấy ngày trong tháng
const hours = currentDate.getHours(); // Lấy giờ (0-23)
const minutes = currentDate.getMinutes(); // Lấy phút (0-59)
const seconds = currentDate.getSeconds(); // Lấy giây (0-59)
console.log(`Ngày hiện tại: ${day}/${month}/${year} ${hours}:${minutes}:${seconds}`);

Timestamp là một đại diện cho một điểm cụ thể trong thời gian, tính bằng millisecond từ mốc 0 
Mốc thời gian 0: 00:00:00 ngày 1 tháng 1 năm 1970

const timestamp = currentDate.getTime(); // Lấy timestamp (millisecond từ mốc 0)
console.log(`Timestamp hiện tại: ${timestamp}`); -- In ra timestamp

*/

/* Set thời gian theo ý muốn
-- Cách 1: new Date(year, month, day, hours, minutes, seconds)
let myDate1 = new Date(2023, 9, 31, 12, 0, 0); // Tạo đối tượng Date cho ngày 31 tháng 10
console.log(myDate1); // In ra đối tượng Date đã tạo
console.log(myDate1.toLocalDateString()); // In ra định dạng ngày giờ theo múi giờ địa phương

-- Cách 2: new Date(dateString)
let myDate2 = new Date('2023-10-31T12:00:00'); // Tạo đối tượng Date từ chuỗi ngày giờ
console.log(myDate2); // In ra đối tượng Date đã tạo
console.log(myDate2.toLocalDateString()); // In ra định dạng ngày giờ theo múi giờ địa phương   

-- Cách 3: Sử dụng set các thành phần riêng lẻ
let myDate3 = new Date(); // Tạo đối tượng Date hiện tại
myDate3.setFullYear(2023); // Đặt năm
myDate3.setMonth(9); // Đặt tháng (0-11, nên 9 là tháng 10)
myDate3.setDate(31); // Đặt ngày
myDate3.setHours(12); // Đặt giờ
myDate3.setMinutes(0); // Đặt phút
myDate3.setSeconds(0); // Đặt giây
console.log(myDate3); // In ra đối tượng Date đã tạo -- sẽ là ngày 31 tháng 10 năm 2023 lúc 12:00:00
*/

/* Xuất ngày tháng năm
-- Cách 1: Sử dụng toLocaleDateString()
myDate3 = new Date(2023, 9, 31, 12, 0, 0); // Tạo đối tượng Date cho ngày 31 tháng 10
console.log(myDate3.toLocaleDateString()); // In ra định dạng ngày tháng năm theo múi giờ địa phương

-- Cách 2: Định dạng thủ công
console.log(`Ngày ${myDate3.getDate()}/ Tháng ${myDate3.getMonth() + 1}/ Năm ${myDate3.getFullYear()}`); // In ra định dạng ngày tháng năm thủ công

//Thêm số 0 vào ngày và tháng nếu cần thiết
let prefixDay = myDate3.getDate() < 10 ? '0' + myDate3.getDate() : myDate3.getDate();
*/

/* setTimeout dùng để thực hiện một hàm sau một khoảng thời gian nhất định
Cú pháp: setTimeout(function, milliseconds, pram1, param2, ...)
-- Ví dụ: In ra "Hello, World!" sau 2 giây  
setTimeout(() => {
    console.log("Hello, World!");
}, 2000); // 2000 milliseconds = 2 seconds      


-- Ôn lại cách khai báo hàm
1. Arrow function
let helloArrow = () => {
    console.log("Hello, World!");
}
    setTimeout(helloArrow, 3000)

2. Function declaration
function helloFunction() {
    console.log("Hello, World!");
}
setTimeout(helloFunction, 3000); // In ra "Hello, World!" sau 3 giây

3. Function expression
let helloExpression = function() {
    console.log("Hello, World!");
}   
setTimeout(helloExpression, 3000); // In ra "Hello, World!" sau 3 giây

-- Truyền trực tiếp Function vào setTimeout
1. Declaration
setTimeout(function helloFunction() {
    console.log("Hello, World!");
}, 3000); // In ra "Hello, World!" sau 3 giây

2. Expression
setTimeout(function() {
    console.log("Hello, World!");
}, 3000); // In ra "Hello, World!" sau 3 giây 

3. Arrow function
setTimeout(() => {
    console.log("Hello, World!");
}, 3000); // In ra "Hello, World!" sau 3 giây

-- setTimeout có tham số truyền vào
setTimeout((name) => {
    console.log(`Hello, ${name}!`);
}, 3000, "John"); // In ra "Hello, John!" sau 3 giây

-- setTimeout hủy hàm thực hiện
let helloArray = (yourName) => {
    console.log("Hello, " + yourName + "!");
}
setTimeout(helloArray, 3000, "John"); // In ra "Hello, John!" sau 3 giây
-- khi muốn hủy quá trình thực hiện hàm
step 1: setTimeout vào 1 biến để lưu giá trị
let deleteTimeout = setTimeout(helloArray, 3000, "John"); // In ra "Hello, John!" sau 3 giây
step 2: Sử dụng clearTimeout để hủy
clearTimeout(deleteTimeout); // Hủy quá trình thực hiện hàm helloArray

-- setInterval dùng để thực hiện một hàm lặp đi lặp lại sau một khoảng thời gian nhất định
Cú pháp: setInterval(function, milliseconds, param1, param2, ...) 

1. Function declaration
function repeatHello() {
    console.log("Hello, World!");
}
setInterval(repeatHello, 2000); // In ra "Hello, World!" mỗi 2 giây
ví dụ: 
let count = 0;
function count() {
    count++;
    console.log(count);
}
setInterval(count, 1000); // In ra giá trị count mỗi giây

-- Hủy lặp setInterval
let count = () => {
    console.log(count++);
    if(count === 5) {
        clearInterval(stopCount); // Hủy lặp sau 5 lần
    }
let stopCount = setInterval(count, 1000); // In ra giá trị count mỗi giây
*/
