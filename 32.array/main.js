/* MẢNG - array
-- Khai báo mảng
1. Sử dụng cặp dấu ngoặc vuông [] (thường dùng nhất)
let array1 = []; // Mảng rỗng
let array2 = [1, "Kiệt", true]; // Mảng chứa các số nguyên

2. Sử dụng hàm Array() và Constructor
// Khai báo mảng rỗng sử dụng hàm Array() constructor
let array3 = new Array(); // Mảng rỗng
console.log(array3); // []
// Khai báo mảng với các phần tử sử dụng hàm Array() constructor
let array4 = new Array(1, "Kiệt", true); // (3) [1, "Kiệt", true]
// Tạo mang với độ dài nhất định, các phần tử sẽ là undefined
let array5 = new Array(3); // (3) [undefined, undefined, undefined]
console.log(array5); // [undefined, undefined, undefined]

-- Truy xuất phần tử trong mảng qua vị trí index
let array6 = [1, "Kiệt", true];
console.log(array6[1]); // "Kiệt"

-- Thuộc tính length của mảng
// Thuộc tính length của mảng sẽ trả về số lượng phần tử trong mảng
console.log(array6.length); // 3

-- Gán thay đổi phần tử trong mảng
let array7 = [1, "Kiệt", true]; 
array7[1] = "Nguyễn Văn Kiệt"; // Gán giá trị mới cho phần tử tại vị trí index 1
console.log(array7); // (3) [1, "Nguyễn Văn Kiệt", true]

-- Duyệt qua mảng
// Sử dụng vòng lặp for
let array8 = [1, 2, 3, 4, 5];
console.log(array8);  // (5) [1, 2, 3, 4, 5]
for (let i = 0; i < array8.length; i++) {
    //Sửa giá trị của phần tử tại vị trí i
    array8[i] = array8[i] * 2; // Nhân đôi giá trị của phần tử tại vị trí i
}

console.log(array8); // (5) [2, 4, 6, 8, 10]

// Sử dụng vòng lặp for...of: chỉ có thể xem giá trị của phần tử, không thể sửa giá trị
let array9 = [1, 2, 3, 4, 5];
let count = 0;
for (let value of array9) {
    // Xem được
    console.log(value); // In ra từng giá trị của mảng
    // Check điều kiện với từng phần tử, đếm số phần tử % 2
    if (value % 2 === 0) {
        count++; // Tăng biến đếm nếu phần tử là số chẵn
    }
}

console.log(`Số phần tử chẵn trong mảng là: ${count}`); // Số phần tử chẵn trong mảng là: 2
*/

/* Các phương thức của mảng
1. concat() - Nối hai hoặc nhiều mảng lại với nhau, xuất ra  mảng mới
let array10 = [1, 2, 3];
let array11 = [4, 5, 6];
let array12 = array10.concat(array11); // (6) [1, 2, 3, 4, 5, 6]
console.log(array12); // (6) [1, 2, 3, 4, 5, 6]

2. push() - Thêm một hoặc nhiều phần tử vào cuối mảng, trả về độ dài mới của mảng, làm change mảng gốc
let array13 = [1, 2, 3];
array13.push(4, 5); // (5) [1, 2, 3, 4, 5]

3. unshift() - Thêm một hoặc nhiều phần tử vào đầu mảng, trả về độ dài mới của mảng, làm change mảng gốc
let array14 = [1, 2, 3];
array14.unshift(0); // (4) [0, 1, 2, 3] 

4. pop() - Loại bỏ phần tử cuối cùng của mảng, trả về phần tử đã bị loại bỏ, làm change mảng gốc
let array15 = [1, 2, 3];
let removedElement = array15.pop(); // 3
console.log(removedElement); // 3
console.log(array15); // (2) [1, 2]

5. shift() - Loại bỏ phần tử đầu tiên của mảng, trả về phần tử đã bị loại bỏ, làm change mảng gốc
let array16 = [1, 2, 3];
let removedElement2 = array16.shift(); // 1
console.log(removedElement2); // 1
console.log(array16); // (2) [2, 3]

6. slice() - Trả về một mảng mới chứa các phần tử được chọn từ mảng gốc, không làm change mảng gốc
slice(start, end) - start: vị trí bắt đầu (bao gồm), end: vị trí kết thúc (không bao gồm)
bỏ trống start và end sẽ lấy toàn bộ mảng
let array17 = [1, 2, 3, 4, 5];
let slicedArray = array17.slice(1, 4); // (3) [2, 3, 4] // Lấy từ vị trí 1 đến 4 (không bao gồm 4)
console.log(slicedArray); // (3) [2, 3, 4]

7. includes() - Kiểm tra xem mảng có chứa một phần tử nhất định hay không, trả về true hoặc false
let array18 = [1, 2, 3, 4, 5];
console.log(array18.includes(3)); // true
console.log(array18.includes(6)); // false

8. indexOf() - Trả về vị trí đầu tiên của phần tử trong mảng, nếu không tìm thấy thì trả về -1
let array19 = [1, 2, 3, 4, 3, 5];
console.log(array19.indexOf(3)); // 2
console.log(array19.indexOf(6)); // -1

9. lastIndexOf() - Trả về vị trí cuối cùng của phần tử trong mảng, nếu không tìm thấy thì trả về -1
let array20 = [1, 2, 3, 4, 3, 5];   
console.log(array20.lastIndexOf(3)); // 4
console.log(array20.lastIndexOf(6)); // -1

10. reverse() - Đảo ngược thứ tự các phần tử trong mảng, làm change mảng gốc
let array21 = [1, 2, 3, 4, 5];
array21.reverse(); // (5) [5, 4, 3, 2, 1]
console.log(array21); // (5) [5, 4, 3, 2, 1]
// vừa tạo bản sao chép của mảng gốc, vừa đảo ngược thứ tự các phần tử
let array22 = array20.slice().reverse(); // (5) [1, 2, 3, 4, 5]
console.log(array22); // (5) [5, 4, 3, 2, 1]

11. array.join(separator) - Nối các phần tử của mảng thành một chuỗi, 
sử dụng separator để phân tách các phần tử, mặc định là dấu phẩy, không làm change mảng gốc
let array23 = [1, 2, 3, 4, 5];
let joinedString = array23.join("! ");
console.log(joinedString); // "1! 2! 3! 4! 5"
console.log(typeof joinedString); // string
*/
