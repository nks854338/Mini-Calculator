let btns=document.querySelectorAll("button");
let input=document.getElementById("inputBox");

let string="";

btns.forEach(btn => {
    btn.addEventListener('click',(e)=>{
        if(e.target.innerText=="="){
            string=eval(string);
            input.value=string;
        }
        else if(e.target.innerText=="AC"){
            string="";
            input.value=string;
        }
        else if(e.target.innerText=="DEL"){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else{
            string +=e.target.innerText;
            input.value=string;
        }
    })
});
