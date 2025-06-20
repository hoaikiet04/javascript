class Shape {
  constructor(name) {
    this.name = name;
  }
  // phương thức tính diện tích, mặc định return về 0
  calculateArea() {
    return 0;
  }
}
// lớp con hình Vuông
class Square extends Shape {
  constructor(name, side) {
    super(name);
    this.side = side;
  }

  calculateArea() {
    return this.side * this.side;
  }
}

// lớp hình chữ nhật
class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

const sq1 = new Square("Hình vuông", 5);
const rec1 = new Rectangle("Hình chữ nhật", 5, 9);
console.log(`Diện tích ${sq1.name} là ${sq1.calculateArea()}`);
console.log(`Diện tích ${rec1.name} là ${rec1.calculateArea()}`);
