let grid=document.querySelector('.mygamegrid')
let player1Btn=document.getElementById('player1Id')
let player2Btn=document.getElementById('player2Id')
let restartBtn=document.querySelector('.restart')
haveWinner=false
var player1Turn=true;
var player2Turn=false;
let startCells=["","","","","","","","",""]
let circle= '&#9711;';
let letterX='&#10005;';
let whosturn='circle'
let id=0;

let declareWinner=document.getElementById('declareWinnerId')
let moves=0




//create grid
function elementmaker(tag,appendto,classlist){
   let myel=document.createElement(tag)
   myel.setAttribute('value','0')
   myel.setAttribute('id',id++)
   myel.classList.add(classlist)
   appendto.appendChild(myel)

}




startCells.forEach((cell)=>{
   elementmaker('div',grid,'grid-box')
})

    
// }
const gridBoxes=document.querySelectorAll('.grid-box')


player1Btn.style.backgroundColor='green'
function Chooseplay(e){
   function addO(){
      moves++
      console.log(moves);
      whosturn=circle
      let O=document.createElement('div')
      O.classList.add('playStyle')
     O.classList.add('Circle')
     O.innerHTML=`${whosturn}`
     e.target.append(O)
     e.target.setAttribute('id','O')
    
     player2Btn.style.backgroundColor='green'
   player1Btn.style.backgroundColor='grey'
     
    checkForWinner()
   }
 
    
      
   
  console.log(e.target);
   // checkForWinner()
  
                   
  

   function addX(){
   
   console.log(moves);
 
      let X=document.createElement('div')
      X.classList.add('playStyle')
     X.classList.add('X')
     X.innerHTML='&#10005;'
     e.target.append(X)
     e.target.setAttribute('id','X')
   
  console.log(e.target);

 
   player1Btn.style.backgroundColor='green'
   player2Btn.style.backgroundColor='grey'
   checkForWinner()
}
    
if(player1Turn){
   moves++
   player1Turn=false
   return addO()
}
if(player1Turn==false){
   moves++
   player1Turn=true
   return addX()
}


checkForWinner()
}
    
   

    
     


  
                   
   player1Btn.style.backgroundColor='grey'
   

gridBoxes.forEach((grBox)=>{
     
      grBox.addEventListener('click',Chooseplay,{once:true})   
   
   
})
//make player functionality



//winner function
function checkForWinner(){
   let winningCombos=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
   let allGridboxes=document.querySelectorAll('.grid-box')
 
  
   
   //player 1 wins
   if(gridBoxes[0].firstChild?.classList.contains('Circle')&&gridBoxes[1].firstChild?.classList.contains('Circle')&&gridBoxes[2].firstChild?.classList.contains('Circle')){
      declareWinner.innerHTML='player1 wins';
      haveWinner=true
    restartgame()
   }

   if(gridBoxes[3].firstChild?.classList.contains('Circle')&&gridBoxes[4].firstChild?.classList.contains('Circle')&&gridBoxes[5].firstChild?.classList.contains('Circle')){
      declareWinner.innerHTML='player1 wins'
      haveWinner=true
      restartgame()
   }

   if(gridBoxes[6].firstChild?.classList.contains('Circle')&&gridBoxes[7].firstChild?.classList.contains('Circle')&&gridBoxes[8].firstChild?.classList.contains('Circle')){
      declareWinner.innerHTML='player1 wins'
      haveWinner=true
      restartgame()
   }

   if(gridBoxes[0].firstChild?.classList.contains('Circle')&&gridBoxes[3].firstChild?.classList.contains('Circle')&&gridBoxes[6].firstChild?.classList.contains('Circle')){
      declareWinner.innerHTML='player1 wins'
      haveWinner=true
      restartgame()
   }
   if(gridBoxes[1].firstChild?.classList.contains('Circle')&&gridBoxes[4].firstChild?.classList.contains('Circle')&&gridBoxes[7].firstChild?.classList.contains('Circle')){
      declareWinner.innerHTML='player1 wins'
      haveWinner=true
      restartgame()
   }

   if(gridBoxes[2].firstChild?.classList.contains('Circle')&&gridBoxes[5].firstChild?.classList.contains('Circle')&&gridBoxes[8].firstChild?.classList.contains('Circle')){
      declareWinner.innerHTML='player1 wins'
      haveWinner=true
      restartgame()
   }

   if(gridBoxes[0].firstChild?.classList.contains('Circle')&&gridBoxes[4].firstChild?.classList.contains('Circle')&&gridBoxes[8].firstChild?.classList.contains('Circle')){
      declareWinner.innerHTML='player1 wins'
      haveWinner=true
      restartgame()
   }
   if(gridBoxes[2].firstChild?.classList.contains('Circle')&&gridBoxes[4].firstChild?.classList.contains('Circle')&&gridBoxes[6].firstChild?.classList.contains('Circle')){
      declareWinner.innerHTML='player1 wins'
      haveWinner=true
      restartgame()
   }

   //player 2 wins
   if(gridBoxes[0].firstChild?.classList.contains('X')&&gridBoxes[1].firstChild?.classList.contains('X')&&gridBoxes[2].firstChild?.classList.contains('X')){
      declareWinner.innerHTML='player2 wins'
      haveWinner=true
      restartgame()
   }

   if(gridBoxes[3].firstChild?.classList.contains('X')&&gridBoxes[4].firstChild?.classList.contains('X')&&gridBoxes[5].firstChild?.classList.contains('X')){
      declareWinner.innerHTML='player2 wins'
      haveWinner=true
      restartgame()
   }

   if(gridBoxes[6].firstChild?.classList.contains('X')&&gridBoxes[7].firstChild?.classList.contains('X')&&gridBoxes[8].firstChild?.classList.contains('X')){
      declareWinner.innerHTML='player2 wins'
      haveWinner=true
      restartgame()
   }

   if(gridBoxes[0].firstChild?.classList.contains('X')&&gridBoxes[3].firstChild?.classList.contains('X')&&gridBoxes[6].firstChild?.classList.contains('X')){
      declareWinner.innerHTML='player2 wins'
      haveWinner=true
      restartgame()
   }
   if(gridBoxes[1].firstChild?.classList.contains('X')&&gridBoxes[4].firstChild?.classList.contains('X')&&gridBoxes[7].firstChild?.classList.contains('X')){
      declareWinner.innerHTML='player2 wins'
      haveWinner=true
      restartgame()
   }

   if(gridBoxes[2].firstChild?.classList.contains('X')&&gridBoxes[5].firstChild?.classList.contains('X')&&gridBoxes[8].firstChild?.classList.contains('X')){
      declareWinner.innerHTML='player2 wins'
      haveWinner=true
      restartgame()
   }

   if(gridBoxes[0].firstChild?.classList.contains('X')&&gridBoxes[4].firstChild?.classList.contains('X')&&gridBoxes[8].firstChild?.classList.contains('X')){
      declareWinner.innerHTML='player2 wins'
      haveWinner=true
      restartgame()
   }
   if(gridBoxes[2].firstChild?.classList.contains('X')&&gridBoxes[4].firstChild?.classList.contains('X')&&gridBoxes[6].firstChild?.classList.contains('X')){
      declareWinner.innerHTML='player2 wins'
      haveWinner=true
      restartgame()
   }
   if(moves>=13&&haveWinner!=true){
      haveWinner=false
      declareWinner.innerHTML='tie'
      console.log('tie');
      restartgame()
   }
}
function restartgame(){
   gridBoxes.forEach((box)=>{
      box.replaceWith(box.cloneNode(true))
   })

  restartBtn.style.backgroundColor='green'
  restartBtn.addEventListener('click',()=>{
   location.reload()
  })
}