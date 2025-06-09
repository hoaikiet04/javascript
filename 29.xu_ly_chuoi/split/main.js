/* split() trong JavaScript
.split(separator, limit) 
Tách chuỗi trả về mảng 
các chuỗi con được phân tách bởi separator.
- separator: Kí tự hoặc chuỗi dùng để tách chuỗi gốc.   
- limit: Số lượng tối đa các phần tử trong mảng trả về.
Nếu không có separator, toàn bộ chuỗi sẽ được trả về trong mảng.

let student = "Hoa, Lan, Huệ, Mai, Hằng";
let arr = student.split(", ");
let arr2 = student.split(", ", 3);
console.log(arr2); // ["Hoa", "Lan", "Huệ"]
console.log(arr); // ["Hoa", "Lan", "Huệ", "Mai", "Hằng"]
// Nếu không có separator, toàn bộ chuỗi sẽ được trả về trong mảng.
let str = "Hello World";
let arr2 = str.split();
console.log(arr2); // ["Hello World"]   
*/
