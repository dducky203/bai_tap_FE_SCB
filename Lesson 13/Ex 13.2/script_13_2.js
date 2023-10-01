// Lấy các phần tử cần thiết
var name = document.getElementById("fullname");
var email = document.getElementById("email");
var phone = document.getElementById("phone-number");
var password = document.getElementById("password");
var repassword = document.getElementById("repassword");
var signUp = document.getElementById("signUp");


// Lấy các phần tử hiển thị lỗi
var nameError = document.getElementById("error-name");
var phoneError = document.getElementById("error-phone");
var emailError = document.getElementById("error-email");
var passwordError = document.getElementById("error-password");
var repasswordError = document.getElementById("error-repassword");
//var check_isEmpty = document.getElementsByClassName("form-message");

/* 
function isEmpty(){
    // Kiểm tra rỗng
    if(fullname == "" ||  email.value == "" || phone.value == "" || password == "" || repassword.value == ""){
        // Hiển thị lỗi
        check_isEmpty.style.display = "inline-block";
        // Trả về false
        return false;
    } else {
      // Ẩn lỗi
      check_isEmpty.style.display = "none";
      // Trả về true
      return true;
    }
}*/

// Hàm kiểm tra họ tên
function validateName() {
    // Họ tên phải lớn hơn 8 ký tự
    if (fullname.value.length <= 8) {
      // Hiển thị lỗi
      nameError.style.display = "inline-block";
      // Trả về false
      return false;
    } else {
      // Ẩn lỗi
      nameError.style.display = "none";
      // Trả về true
      return true;
    }
  }

// Hàm kiểm tra email
function validateEmail() {
    // Email phải đúng định dạng
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Biểu thức chính quy cho email
    if (!regex.test(email.value)) {
      // Hiển thị lỗi
      emailError.style.display = "inline-block";
      // Trả về false
      return false;
    } else {
      // Ẩn lỗi
      emailError.style.display = "none";
      // Trả về true
      return true;
    }
  }

// Hàm kiểm tra số điện thoại
function validatePhone() {
    // Số điện thoại phải là kiểu số
    if (isNaN(phone.value) || (phone.value.length < 10) || (phone.value.length > 11)) {
      // Hiển thị lỗi
      phoneError.style.display = "inline-block";
      // Trả về false
      return false; 
    } else {
      // Ẩn lỗi
      phoneError.style.display = "none";
      // Trả về true
      return true;
    }
  }

  // Hàm kiểm tra mật khẩu
function validatePassword() {
    // Mật khẩu không được để trống
    if (password.value == "") {
      // Hiển thị lỗi
      passwordError.style.display = "inline-block";
      // Trả về false
      return false;
    } else {
      // Ẩn lỗi
      passwordError.style.display = "none";
      // Trả về true
      return true;
    }
  }
  
  // Hàm kiểm tra nhập lại mật khẩu
  function validateRepassword() {
    // Mật khẩu nhập lại phải giống mật khẩu
    if (repassword.value != password.value) {
      // Hiển thị lỗi
      repasswordError.style.display = "inline-block";
      // Trả về false
      return false;
    } else {
      // Ẩn lỗi
      repasswordError.style.display = "none";
      // Trả về true
      return true;
    }
  }

/* 
  // Sự kiện khi nhấn nút Đăng kí form
  signUp.addEventListener("click", function (event) {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của form

    // Kiểm tra các trường dữ liệu và lưu kết quả vào biến valid
    var valid =
    validateName() &&
    validatePhone() &&
    validateEmail() &&
    validatePassword() &&
    validateRepassword();

  if (valid) {
    alert("Form hợp lệ"); // Thông báo form hợp lệ nếu valid là true
  } else {
    alert("Form không hợp lệ"); // Thông báo form không hợp lệ nếu valid là false
}});*/

function checkAll(){
  /* 
  validateName() ;
  validatePhone() ;
  validateEmail() ;
  validatePassword() ;
  validateRepassword();*/

  var valid =
  validateName() &&
  validatePhone() &&
  validateEmail() &&
  validatePassword() &&
  validateRepassword();

  if (valid) {
    alert("Form hợp lệ"); // Thông báo form hợp lệ nếu valid là true
  } 
}


