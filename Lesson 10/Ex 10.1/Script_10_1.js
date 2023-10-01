var i = 1;
var count = 0;

for (i ; i <= 100 ; i++){
    if (i % 3 == 0 || i % 7 == 0){
        document.write(' ',i )
        count++;
    }
}
document.write(' Cac so chia het cho 3 va 7 la: ',count);