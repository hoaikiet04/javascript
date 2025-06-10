/* Bài 33: Object
 */
// 1. Khai báo đối tượng, literal syntax
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

  // phương thức được viết lại để trả về một thuộc tính
  getAge2: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },

  diemTrungBinh: function () {
    // Tính tổng điểm
    sumScores = this.scores.reduce((a, b) => a + b, 0);
    // Trả về điểm trung bình
    return sumScores / 3;
  },
};

/* Có thể khai báo key dưới dạng chuỗi 
(key có thể chứa các ký tự đặc biệt bất kỳ, thậm chí có thể vi phạm quy tắc đặt tên biến bằng cách đặt key trong "") */
let teacher = {
  "1 fullName": "Nguyễn Thị Mẹ",
  "@ address": {
    city: "Hà Nội",
    job: "part-time",
  },
};

/* 2. Truy cập thuộc tính: Dot Natation . và Bracket Notation []
2.1 Sử dụng dot (.) - Dot Natation
console.log(student.fullName); // Trần Hoài Kiệt
console.log(student.scores); // [8, 9, 10]
console.log(student.scores[1]); // 9

2.2 Sử dụng Bracket Natation - và truyền vào giá trị của key
Bracket Notation dùng khi key đặc biệt - có khoảng trắng, vi phạm quy tắc đặt tên biến....
console.log(teacher ["1 fullName"]);
console.log(student["fullName"]); //"Trần Hoài Kiệt"
*/

let inputKey = "address";
console.log("Truy xuất đến key dùng với tên biến inputKey: ");
console.log(student[inputKey]);
if (student[inputKey]) {
  console.log(student[inputKey]);
} else {
  console.log("inputKey mày nhập đéo có");
}

// Nếu truy xuất 1 key không tồn tại sẽ trả về undefined
// Ví dụ kiểm tra mail không tồn tại thì báo lỗi

// 3.1 Truy nhập phương thức
console.log("Truy nhập phương thức");
console.log(student.getAge());
console.log(student.diemTrungBinh());

// Vấn đề: giả sử trong chương trình bạn cần gọi nhiều lần hàm getAge
// --> Chương trình sẽ mất nhiều thời gian tính toán do hàm bị gọi đi gọi lại
student.getAge2();

// xuất thử tuổi qua phương thức age mới được thêm và getAge2
console.log(student.age);

// Thêm đối tượng (thêm cặp key value)
student.email = "phamhoaikiet04@gmail.com"; // thêm thuộc tính mới
student["website"] = "oke"; // thêm thuộc tính mới

// Xóa thuộc tính
delete student.email;
console.log(student); // mất thuộc tính email

// Sửa thuộc tính
student.website = "sửa gòi";
console.log(student);
