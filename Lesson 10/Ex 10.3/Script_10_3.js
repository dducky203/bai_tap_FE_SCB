var m, n, k, i;
var sum = 0;
n = parseInt(prompt("Nhap vao 1 so n: "));
m = parseInt(prompt("Nhap vao 1 so m: "));
k = parseInt(prompt("Nhap vao 1 so k: "));

for (var i = n; i <= m ; i++){
    if (i % k == 0){
        sum += i;
    }
}
document.write("Tong = "+sum);
