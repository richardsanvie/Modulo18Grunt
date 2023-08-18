var elements = document.getElementsByClassName("column");

var i;

function one(){
    for (i=0;i<elements.length; i++){
        elements[i].computedStyleMap.msFlex = "100%";
        elements[i].style.flex = "100%";
    }
}

function two(){
    for (i=0;i<elements.length; i++){
        elements[i].computedStyleMap.msFlex = "50%";
        elements[i].style.flex = "50%";
    }
}

var header = document.getElementById("myHeader");
var btns = header.getElementsByClassName("btn");
for (var i =0; i<btns.length;i++){
    btns[i].addEventListener("click",function(){
        var current = document.getElementsByClassName(" active");
        current[0].className =current[0].className.replace(" active","");
        this.className += " active";
    });
}

