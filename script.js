 let boxes= document.querySelectorAll(".box");
 let rstbtn= document.querySelector("#reset-btn");
 
 let msgcontainer= document.querySelector(".msg-container");
 let msg = document.querySelector("#msg");
 


 let turn0 = true;
 
 const winpattern = [
     [0,1, 2], 
     [3, 4,5],
     [6, 7,8],
     [0, 3,6], 
     [1,4, 7], 
     [2,5, 8], 
     [0, 4,8], 
     [2,4, 6]
 ];

 const resetGame = ()=>{
 turn0 = true ; 
 enableBoxes();
 msgcontainer.classList.add("hide");

 };
 

 
 rstbtn.addEventListener("click", resetGame);
 

 boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
       console.log("box was clicked");
       if(turn0 ){
        box.innerText="0";
        turn0=false;
         
       }
       else{
        box.innerText="X";
        turn0=true;
         
       }
       box.disabled=true;
       checkwinner();

    });
 });
   const disableBoxes = ()=>{
    for(let box of boxes){
         box.disabled= true;
    }
   };

   const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled= false; 
        box.innerText="";
    }
   };
 const showwinner = (winner)=>{
    msg.innerText= `Congratulation , Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
     disableBoxes();
 };

    
 const checkwinner=()=>{
   for(let pattern of winpattern){
        
         let pos1= boxes[pattern[0]].innerText;
         let pos2= boxes[pattern[1]].innerText;
         let pos3=boxes[pattern[2]].innerText;

         if(pos1!=""&& pos2!=""&& pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner", pos1);
                
                showwinner(pos1);
            }
         }
   }
 }

