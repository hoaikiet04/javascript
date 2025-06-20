// Các phương thức sẵn có trong object

/* 1. Object.keys(obj) 
- Phương thức này trả về một mảng chứa tất cả các key(tên thuộc tính) của đối tượng.
let person = {name: "John", age: 30};
let keys = Object.keys(person);
console.log(keys); // ["name", "age"]

2. Object.values(obj)
- Phương thức này trả về một mảng chứa tất cả các giá trị của đối tượng
let person = {name: "John", age: 30};
let values = Object.values(person2);
console.log(keys); // ["John", "30"]

3. Object.entries(obj) 
- Phương pháp này trả về một mảng chứa các cặp [khoa, giá trị] của đối tượng dưới dạng mảng con 
let person = {name: "John", age: 30};
let entries = Object.entries(person);
console.log(entries); // [["name", "John"], ["age", 30]]

4. Object.assign(target, source);
- Sử dụng để sao chép các thuộc tính từ một hoặc nhiều đối tượng (source) vào 1 đối tượng đích (target)

let target = {c: 100};
let source1 = {a:2};
let source2 = {b:8};
Object.assign(target, source1, source2;
console.log(c: 100, a: 2; b: 8);

let target2 = {...source1, ...source2};
console.log(target2); // {a: 2; b: 8}

5. Object.hasOwnProperty
- Phương thức này kiểm tra xem đối tượng có một thuộc tính (key) nào đó hay không và trả về theo boolean

let person = {name: "John", age: 30};
console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("job")); // false

6. Object.freeze(obj)
- Phương thức này đóng băng đối tượng làm cho nó không thể thêm, sửa, xóa
let person = {name: "John", age: 30};
Object.freeze(person);
person.age = 31; // thay đổi không có hiệu lực
person.email = "abc@gmail.com" // không thể thêm được
delete person.age // không thể xóa được
console.log(person); // {name: "John", age: 30}

7. Object.seal(obj)
- Ngăn không cho thêm, xóa thuộc tính, chỉ cho phép sửa giá trị
let person = {name: "John", age: 30};
Object.seal(person);
person.location = "HoChiMinh City"; // thao tác này sẽ bị bỏ qua 
delete person.age; // thao tác này cũng sẽ bị bỏ qua 
person.age = 35;
console.log(person); //  {name: "John", age: 35}

*/

/* Nên sử dụng var hay let
var a = 5;
console.log(a)
var a = 9;
console.log(b); // sẽ xuất cả 5 9 và không báo lỗi

let a = 5;
console.log(a)
let a = 9;
console.log(b); // báo lỗi vì đã khai báo a từ trước rồi nên là ưu tiên dùng let để lỡ quên khai báo 2 lần thì còn dễ phát hiện

- const: khai báo hằng số không đổi trong suốt chương trình
*/

/* Hàm Tạo và Constructor
let student = {
  // key + value
  // thuộc tính
  fullName: "Trần Hoài Kiệt",
  birthYear: 2004,
  address: {
    city: "Hồ Chí Minh",
    homeTown: "Trà Vinh",
  },
  scores: [8, 9, 10],
  // phương thức
  getAge: function () {
    return 2024 - this.birthYear;
  },

  diemTrungBinh: function () {
    // Tính tổng điểm
    sumScores = this.scores.reduce((a, b) => a + b, 0);
    // Trả về điểm trung bình
    return sumScores / 3;
  },
};


Viết hoa chữ cái đầu để phân biệ với các hàm thông thường
Cách 1: Function expression (ít dùng)
const SinhVien = function (fullName, ID birthYear, homeTown){
    // thuộc tính
    this.fullName = fullName;
    this.ID = ID;
    this.birthYear = birthYear;
    this.homeTown = homeTown;
    
    // phương thức
    this.showInfo = function() {
    return `${this.fullName} ${this.ID} ${this.homeTown}`;
    }
}

Cách 2: Function declaration 
function Student(fullName, ID birthYear, homeTown){
    // thuộc tính
    this.fullName = fullName;
    this.ID = ID;
    this.birthYear = birthYear;
    this.homeTown = homeTown;
    
    // phương thức
    this.showInfo = function() {
    return `${this.fullName} ${this.ID} ${this.homeTown}`;
    }
}

- Tạo các đối tượng cụ thể (instance - 1 thể hiện) từ hàm tạo student 
const sv1 = new Student("Phạm Hoài Kiệt", "20042211", 2004, "Vĩnh Long");
const sv1 = new Student("Phạm Văn Băng", "20052211", 2005, "Vĩnh Long");

Step 1: Sử dụng từ khoa new để tạo một thể hiện mới của một hàm tạo → 1 đối tượng mới rỗng sẽ được tạo ra 
Step 2: Gọi đến hàm tạo Student().
Trong quá trình này, từ khoa this trong hàm tạo tham chiếu đến đối tượng mới vừa được tạo, nơi các thuộc tính và phương thức sẽ được gán.
Step 3: {} linked đến prototype : Khi một thể hiện mới được tạo, JavaScript tự động liên kết nó với nguyên mẫu - Sẽ được học sau
Step 4: Sau khi các thuộc tính và phương thức được gán cho đối tượng mới thông qua từ khoa this, hàm tạo sẽ tự động trả về đối tượng mới này
*/
