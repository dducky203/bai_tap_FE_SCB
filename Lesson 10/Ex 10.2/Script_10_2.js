var n = parseInt(prompt("Nhap vao 1 so n: "));
var i = 0;
var sum = 0;

do {
    sum += i;
    i++;
}while ( i <= n);

document.write("Tong = ",sum);