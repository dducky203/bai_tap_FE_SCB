var imgs =["img-1.png","img-2.png","img-3.jpg","img-4.png","img-5.jpg"];
var index = 0;

function next (){
    index++;
    if (index == imgs.length){
        index = 0;
    }
    document.getElementById("img").src = imgs[index];
}

function prev (){
    index--;
    if (index < 0){
        index = imgs.length - 1;
    }
    document.getElementById("img").src = imgs[index];
}


setInterval("next()", 5000);