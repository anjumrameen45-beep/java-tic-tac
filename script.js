let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGamebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;//playerx,playerO

const winPatterns=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame=()=>{  //***yeh func tb trigger ho ga jb......
  turnO=true;
  enableboxes();
  msgContainer.classList.add("hide");//jessy hi game reset hoga msgcontainer ko dubara hide krna pry ga.
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{ //when button is clicked
        //is the turn is of O
        if(turnO===true){//playerO
            box.innerText="O";//print
            box.style.color="#132a13";
            turnO=false;// playetX ki turn

        }else{
            //playerX
            box.innerText="X";//print
            box.style.color="#4f772d";
            turnO=true;// again turn of O      //kisi bhi box ko click kryn gy
        }
        box.disabled=true;
        checkWinner();//for checking winner    //checkWinner ky pass call jae gi
});
});
const disableboxes=()=>{    //winner a jata h toh phr next button ko click nhi kr skty phr
    for(let box of boxes){
        box.disabled=true;
    }
};

    const enableboxes=()=>{
    for(let box of boxes){   //when new game start all boxes enable
        box.disabled=false;
        box.innerText="";//sari game ko reset
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations,winner is ${winner}`;
    msgContainer.classList.remove("hide");
disableboxes(); //called
};
const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
       let pos2val=boxes[pattern[1]].innerText;
       let pos3val=boxes[pattern[2]].innerText;
       if(pos1val !="" && pos2val !="" && pos3val !="")//""=empty,//teeno agr empty nhi hn then winner ki condition check ki jay gi
       if(pos1val===pos2val && pos2val===pos3val){
        console.log("winner",pos1val);
        showWinner(pos1val);//winner ko dikhany ky liy func
       }


    }
};
newGamebtn.addEventListener("click",resetGame);//jessy hi newGamebtn pr click kia jay ga
resetbtn.addEventListener("click",resetGame);