// Phạm vi Sử dụng (Scope) trong JavaScript
/* 
Phạm vi sử dụng (Scope):
Xác định nơi mà một biến có thể được truy cập hoặc sử dụng.
1. global scope: Phạm vi toàn cục, truy xuất được ở mọi nơi
2. function-scope: phạm vi của hàm.
3. block-scope: phạm vi của khối (block)
chẳng hạn như trong một if statement hoặc vòng lặp.
*/

// JavaScript Hoisting So sánh sự khác nhau giữa var và let - const trong JavaScript
/* Hoisting (Nâng cao): là hành vi của JS nhằm di chuyển tất cả các khai báo lên đầu phạm vi hiện tại 
(lên đầu tập lệnh hiện tại, hoặc hàm hiện tại, lên đầu block hiện tại)
1. var: Được nâng cao (hoisted) - lên đầu tập lệnh hiện tại, hoặc hàm hiện tại
có thể sử dụng trước khi nó được khai báo trong mã lệnh.
2. let, const: Cũng được nâng cao (hoisted) lên đầu phạm vi block scope tuy nhiên biến sẽ nằm trong 
vùng temporal dead zone - không thể sử dụng biến trước khi nó được khai báo. */

/*
2. Phạm vi sử dụng (Scope):
a. var: Có phạm vi là function-scope:
→ Nếu một biến được khai báo bằng var, phạm vi của nó sẽ là phạm vi của hàm (function)
→ Biến sẽ được đẩy lên đầu phạm vi Function Scope
b. let, const: có phạm vi block scope

3. Re-declaration | Khai báo lại :
var: Có thể khai báo lại một biến sử dụng var mà không gây ra lỗi.
let: Không thể khai báo lại một biến sử dụng let trong cùng một phạm vi.
*/

/* Hoisting trong JavaScript Functions
1. Function Declaration:
Có hoisting. Bạn có thể gọi hàm trước khi nó được định nghĩa.
Gọi hàm trước khi hàm được định nghĩa → OK
2. Function Expression, Arrow Function
Không có hoisting. Phải gọi hàm sau khi đã đã định nghĩa
*/
