// khai báo class
// class expression (ít dùng hơn)
/* const SinhVienEx = class {};
// class decoration (hay dùng hơn)
class sinhVien {
  // constructor method (phương thức được JS xây dựng sẵn cho class)
  constructor(fullName, ID, homeTown, birthYear) {
    // các thuộc tính đối tượng
    this.fullName = fullName;
    this.ID = ID;
    this.homeTown = homeTown;
    this.birthYear = birthYear;
  }

  // Các phương thức khai báo trong class, khai báo ngoài constructor
  // không cần function key
  showInfo() {
    return `${this.fullName} ${this.ID} ${this.homeTown}`;
  }

  calcAge(currentYear) {
    return currentYear - this.birthYear;
  }
}

// tạo đối tượng từ class
const stu3 = new sinhVien("Thomas Editor", 123, "HCM", 2000);
const stu4 = new sinhVien("Thomas", 123, "HCM", 2000);
console.log(stu3);
console.log(stu3.showInfo());

// thêm class sinhVien thủ công (sau khi có class)
sinhVien.prototype.calcAge = function (currentYear) {
  return currentYear - this.birthYear;
};

console.log(stu3.calcAge(2024));
console.log(stu4.showInfo(2024));
*/

// Định nghĩa inheritance es6
class School {
  constructor(fullName, ID, birthYear) {
    this.fullName = fullName;
    this.ID = ID;
    this.birthYear = birthYear;
  }

  // phương thức của lớp school
  calcAge(currentYear) {
    return currentYear - this.birthYear;
  }
}

// lớp student kế thừa từ lớp school
class Student extends School {
  constructor(fullName, ID, birthYear, major) {
    super(fullName, ID, birthYear);
    this.major = major;
  }

  // phương thức của lớp student
  study() {
    console.log(`${this.fullName} is studying ${this.major}`);
  }
}

// tạo đối tượng của lớp school
const p1 = new School("JACKY", "P2004001", 2000);

// tạo đối tượng của sub lớp student
const s1 = new Student("hung", "S2004001", 2010, "computer science ");

// truy cập thuộc tính và phương thức của class school
console.log(p1.ID);
console.log(p1.birthYear);
console.log(p1.fullName);
console.log(p1.calcAge(2024));

// truy cập thuộc tính và phương thức của class student
console.log(s1.major);
console.log(s1);
s1.study();
