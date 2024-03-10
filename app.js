turnO=true;
let boxes=document.querySelectorAll(".box");
let resetB=document.querySelector("#reset");
let newgameB=document.querySelector("#rematch");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame=()=>{
    enable();
    msgcontainer.classList.add("hide");
}
const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const dissable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true; 
        }
       box.disabled=true;
       checkwinner();
    });
    
});
const showwinner=(winner)=>{
    msg.innerText=`congratulation ${winner}`;
    msgcontainer.classList.remove("hide");
};

const checkwinner=()=>{
    for(let pattern of winpattern){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;

        if(val1!="" && val2!="" && val3!=""){
            if(val1==val2 && val1==val3){
                console.log("winner",val1);
                dissable();
                showwinner(val1);
            }
        }
    }
}
resetB.addEventListener("click", resetGame);
newgameB.addEventListener("click", resetGame);