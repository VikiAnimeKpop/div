let divClick = document.getElementById("myDiv");
let i = 0;

divClick.onclick = function(){
    i++;
    if (i%2) {
        divClick.style.border = '10px solid pink';
    }else if (i==2) {
        divClick.style.backgroundColor = 'purple';
        divClick.style.border = "none";
    }else if (i%2==0) {
        divClick.style.backgroundColor = 'blue';
        divClick.style.border = "none";
    }else if (i%2==0) {
        divClick.style.backgroundColor = 'dark blue';
        divClick.style.border = "light green";
    }
    else{
        divClick.style.opacity = '0.5'; 
    }

}
    






