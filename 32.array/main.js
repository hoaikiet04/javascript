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

12. splice() - Thêm hoặc xóa các phần tử trong mảng, làm change mảng gốc
splice(start, deleteCount, item1, item2, ...) 
start: vị trí bắt đầu, deleteCount: số lượng phần tử cần xóa, item1, item2: các phần tử cần thêm vào
let array24 = [1, 2, 3, 4, 5];
array24.splice(2, 1, "Kiệt", "Nguyễn Văn Kiệt"); // (5) [1, 2, "Kiệt", "Nguyễn Văn Kiệt", 4, 5]
array24.splice(0, 2); // (3) ["Kiệt", "Nguyễn Văn Kiệt", 4, 5]
array24.splice(-1, 2); // (2) ["Kiệt", "Nguyễn Văn Kiệt"]
array24.splice(0, 0, "Kiệt"); // (3) ["Kiệt", "Kiệt", "Nguyễn Văn Kiệt"]

13. Toán tử spread (...) - Giúp sao chép mảng, hoặc nối mảng
-- Sao chép mảng - clone array
let array25 = [1, 2, 3];
let array26 = [...array25]; // Sao chép mảng
console.log(array26); // (3) [1, 2, 3]
array26[0] = [4]; 
console.log(array25); // (3) [1, 2, 3] // Mảng gốc không bị thay đổi
console.log(array26); // (3) [4, 2, 3] // Mảng mới bị thay đổi

-- Truyền đối số vào hàm
function sum(a,b,c) {
    return a + b + c;
}   
let numbers = [1, 2, 3];
let result = sum(...numbers); // Truyền các phần tử của mảng vào hàm
console.log(result); // 6

-- Kết hợp mảng
let array27 = [1, 2, 3];
let array28 = [4, 5, 6];    
let combinedArray = [...array27, ...array28]; // (6) [1, 2, 3, 4, 5, 6]
console.log(combinedArray); // (6) [1, 2, 3, 4, 5, 6]

-- Tạo mảng mới kèm thêm phần tử
let array29 = [1, 2, 3];
let newArray = [0, ...array29, 4]; // (5) [0, 1, 2, 3, 4]
console.log(newArray); // (5) [0, 1, 2, 3, 4]

-- chuyển đổi iterable object sang mảng
let myName = "Kiệt";
let nameArray = [...myName]; // (5) ["K", "i", "ệ", "t"]
console.log(nameArray); // (5) ["K", "i", "ệ", "t"]

-- sort() - Sắp xếp mảng
cú pháp: array.sort(compareFunction)
1. Khi không truyền compareFunction, mảng sẽ được sắp xếp theo thứ tự tăng dần của chuỗi
let array30 = [a, b, c, d, e];
// Để xem giá trị unicode của các ký tự, ta có thể sử dụng hàm charCodeAt()
// Duyệt mảng để xem
for (let element of array30) {
    console.log(element.charCodeAt(0)); // 97 98 99 100 101
}   
let sortedArray = array30.sort(); // (5) ["a", "b", "c", "d", "e"]

let array31 = [aaa, a, ccc, ddd, eee];
let sortedArray2 = array31.sort(); // (5) ["a", "aaa", "ccc", "ddd", "eee"] 

Ví dụ với các ký tự số vì sắp xếp theo thứ tự unicode nên kết quả không đúng như mong đợi
let array32 = [10, 2, 1, 20, 3];
let sortedArray3 = array32.sort(); // (5) [1, 10, 2, 20, 3] // Sắp xếp theo thứ tự unicode

-- Hàm so sánh (compareFunction) - Để sắp xếp mảng theo thứ tự số học, ta cần truyền hàm so sánh vào
Nếu compareFunction(a, b) trả về giá trị a < 0, a sẽ đứng trước b
Nếu compareFunction(a, b) trả về giá trị a > 0, a sẽ đứng sau b
Nếu compareFunction(a, b) trả về giá trị 0, vị trí của a và b sẽ không thay đổi

let array33 = [10, 2, 1, 20, 3];
console.log(array33); // (5) [10, 2, 1, 20, 3]
let sortedArray4 = array33.sort((a, b) => a - b); // (5) [1, 2, 3, 10, 20] // Sắp xếp theo thứ tự số học

-- reduce() - Giảm mảng về một giá trị duy nhất
cú pháp: array.reduce(function, [initialValue])
initialValue: giá trị khởi tạo, nếu không truyền thì giá trị đầu tiên của mảng sẽ 
được sử dụng làm initialValue và bắt đầu lặp từ phần tử thứ hai -- nếu mảng rỗng thì sẽ báo lỗi
function(accumulator, currentValue, [currentIndex], [array]) {
    // previousValue: giá trị tích lũy từ được cập nhật sau mỗi lần lặp
    // currentValue: giá trị hiện tại của phần tử đang lặp
    // currentIndex: chỉ số của phần tử hiện tại - đang xử lý (tùy chọn)
    // array: mảng gốc đang được reduce (tùy chọn)
}

chạy theo cách thường
let sum = 0;
for(let element of array33) {
    sum += element; // Cộng dồn giá trị của từng phần tử
}   
console.log(sum); // 36

Khi sử dụng reduce()
let sum2 = array33.reduce(
// Tham số thứ nhất: function
(accumulator, currentValue, currentIndex, array) => {
    return accumulator + currentValue; // Cộng dồn giá trị của từng phần tử
}
// Tham số thứ hai: initialValue
, 0 // Giá trị khởi tạo là 0
);  
console.log(sum2); // 36

15. filter() - Lọc mảng theo điều kiện, trả về mảng mới chứa các phần tử thoa mãn 
cú pháp: array.filter(function)
function(currentValue, index, array) {
    // currentValue: phần tử hiện tại đang lặp
    // index: chỉ số của phần tử hiện tại (tùy chọn)
    // array: mảng gốc đang được filter (tùy chọn)
    return true/false; // Trả về true nếu phần
}    
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Tìm những số chẵn trong mảng
let evenNumbers = numbers.filter(
// function
(value, index, array) => value % 2 === 0; // Trả về true nếu số là chẵn
);
console.log(evenNumbers); // (5) [2, 4, 6, 8, 10]
*/
