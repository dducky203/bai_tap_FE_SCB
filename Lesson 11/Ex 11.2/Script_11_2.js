var element = document.getElementById("text");
var font_size = 16;

//Tăng fontsize lên 40% = 1.4 lần
function increaseFs () {
    font_size *= 1.4;
    element.style.fontSize = font_size + "px";
}

//Giảm fontsize xuống 40% = 1.4 lần
function decreaseFs() {
    font_size /= 1.4;
    element.style.fontSize = font_size + "px";
}

//Đặt lại kích thước ban đầu
function resetFs(){
    font_size = 16;
    element.style.fontSize = font_size + "px";
} 