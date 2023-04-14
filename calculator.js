
var display=document.querySelector("#display");
document.addEventListener("click", btn);

function btn(e){
    if (e.target.id==="ac"){
        display.value=" ";
    }
    else if(e.target.id==="DEL"){
        display.value=display.value.slice(0,-1);
    }
    else if(e.target.id==="="){
        display.value=eval(display.value);
    }
    else if(e.target.id==="calculator" || e.target.id==="display"){
        display.value=display.value;
    }
    else{
        display.value+=e.target.id;
    }
}
