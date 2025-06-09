//38.3 giai bai tap js 25 kiểm tra mật khẩu hợp lệ
/*
Bài tập js 25: kiem tra mat khau hop le. Viết chương trình kiểm tra tính hợp lệ của mật khẩu:
* mật khẩu hợp lệ khi có ít nhất 6 ký tự
* chứa ít nhất 1 chữ cái viết hoa
* chứa ít nhất 1 chữ cái viết thường
* chứa ít nhất 1 chữ số
* cho người dùng nhập vào mật khẩu để login / so sánh,
nêu đúng mở của, sai quá 5 lần khoa đăng nhập, thoát chương trình
 // Ví dụ mật khẩu hợp lệ: Abc123
*/

// Tạo hàm kiểm tra tính hợp lệ của mật khẩu
function isVaildPassword(password) {
  if (password.length < 6) {
    return false; // Mật khẩu phải có ít nhất 6 ký tự
  }

  let hasUpperCase = false; // Biến kiểm tra chữ hoa
  let hasLowerCase = false; // Biến kiểm tra chữ thường
  let hasDigit = false; // Biến kiểm tra chữ số

  for (let i = 0; i < password.length; i++) {
    const char = password[i];
    if (char >= "A" && char <= "Z") {
      hasUpperCase = true; // Kiểm tra chữ hoa
    } else if (char >= "a" && char <= "z") {
      hasLowerCase = true; // Kiểm tra chữ thường
    } else if (char >= "0" && char <= "9") {
      hasDigit = true; // Kiểm tra chữ số
    }
  }

  return hasUpperCase && hasLowerCase && hasDigit; // Trả về true nếu tất cả điều kiện đều đúng
}

// Hàm để yêu cầu người dùng nhập mật khẩu
function requestPassword() {
  let password = prompt(
    "Nhập mật khẩu của bạn (sai quá 5 lần sẽ khoa đăng nhập):"
  );
  if (isVaildPassword(password)) {
    alert("Mật khẩu hợp lệ! Đăng nhập thành công.");
    return password; // Trả về mật khẩu hợp lệ
  } else {
    alert(`Mật khẩu không hợp lê:
        1. Có ít nhất 6 ký tự
        2. Chứa ít nhất 1 số
        3. Chứa ít nhất 1 chữ cái viết hoa
        4. Chứa ít nhất 1 chữ cái viết thường`);
    // Gọi hàm yêu cầu mật khẩu lại
    return requestPassword();
  }
}

// Gọi hàm set pas, và gán vào biến nếu thành công
let passwordOK = requestPassword();
