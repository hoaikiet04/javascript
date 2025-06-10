/* Bài tập 33:
1. Viết chương trình tạo 1 mảng  chiều gồm các phần tử là số nguyên,
có n phần tử ngẫu nhiên, n do người dùng nhập từ bàn phím
2. Xuất các giá trị trong mảng
3. Đảo ngược mảng, và xuất mảng sau khi đảo ngược
4. Sắp xếp mảng tăng dần
5. Tính tổng các phần tử trong máng
6. Cho người dùng nhập 1 số bất kỳ, kiểm tra số đó có tồn tại trong màng hay không,
nếu có xuất ra vị trí index của số đó trong mảng
*/

// 1. Tạo mảng ngẫu nhiên với n phần tử
function createRandomArray(n) {
  let array = [];
  for (let i = 0; i < n; i++) {
    array.push(Math.floor(Math.random() * 100)); // Tạo số ngẫu nhiên từ 0 đến 99
  }
  return array;
}

let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
let randomArray = createRandomArray(n);

// 2. Xuất các giá trị trong mảng
console.log("===== Các giá trị trong mảng =====");
console.log(randomArray);

// 3. Đảo ngược mảng và xuất mảng sau khi đảo ngược
console.log("===== Mảng sau khi đảo ngược =====");
let reversedArray = randomArray.slice().reverse();
console.log(reversedArray);

// 4. Sắp xếp mảng tăng dần
console.log("===== Mảng sau khi sắp xếp tăng dần =====");
let sortedArray = randomArray.slice().sort((a, b) => a - b);
console.log(sortedArray);

// 5. Tính tổng các phần tử trong mảng
let sum = 0;
for (let value of randomArray) {
  sum += value;
}
console.log(`===== Tổng các phần tử trong mảng: ${sum} =====`);

function sum2(array) {
  return array.reduce((acc, value) => acc + value, 0);
}

let total = sum2(randomArray);
console.log(`===== Tổng các phần tử trong mảng (dùng reduce): ${total} =====`);

// 6. Kiểm tra số do người dùng nhập có tồn tại trong mảng hay không

// Nhập liệu
let numberToCheck = Number(prompt("Nhập một số để kiểm tra trong mảng:"));
let arrayIndex = [];
for (let i = 0; i < randomArray.length; i++) {
  if (randomArray[i] === numberToCheck) {
    arrayIndex.push(i); // Lưu vị trí index của số đó
  }
}

if (arrayIndex.length > 0) {
  console.log(
    `Số ${numberToCheck} xuất hiện tại vị trí index: ${arrayIndex.join(", ")}`
  );
} else {
  console.log(`Số ${numberToCheck} không tồn tại trong mảng.`);
}
