

window.onload= function(){
    setgame();
}


let currentViTile;
let currentCrTile;
let currentSkTile;
let score=0;
let gameover=false;
let restartButton;
let highScore=0;
let flag=false;



function setgame(){
    for(let i=0;i<9;i++)
    {
      let tile= document.createElement("div");
      tile.id=i.toString();
      tile.addEventListener("click",selectTile);
      document.getElementById("board").appendChild(tile);
      

    }
    setInterval(setvi,700);
    setInterval(setcr,555);
    //setInterval(setsk,1000);
    highScore=0;

    
}
function randomTile(){
    let num= Math.floor(Math.random()*9)
    return num.toString();
}

function setvi(){
    if(gameover){
        return;
    }

    if(currentViTile){
        currentViTile.innerHTML="";
    }
    let vi=document.createElement("img");
    vi.src="./maxresdefault-removebg-preview.png";
    let num=randomTile();
    if(currentCrTile&& currentCrTile.id==num)
    {
        return;
    }

    currentViTile=document.getElementById(num);
    currentViTile.appendChild(vi);
}


function setcr(){
    if(gameover)
    {
        return;
    }
    if (currentCrTile)
    {
        currentCrTile.innerHTML="";    }
    let cr=document.createElement("img");
    cr.src="./creeper.png";
    let num=randomTile();
    if(currentViTile&&currentViTile.id==num)
    {
        return;
    }
    currentCrTile=document.getElementById(num);
    currentCrTile.appendChild(cr);
}


function selectTile(){
    if(gameover){
        return;
    }
    if(this==currentViTile)
    {
        score +=1;
        document.getElementById("score").innerText=score.toString();
        playSound("villager.mp3");
        highScore=highscore(score);
        document.getElementById("high").innerText="highscore: "+highScore.toString();
}

    else if(this==currentCrTile)
    {
        document.getElementById("score").innerText="GameOver:"+score.toString();
        gameover=true;
        playSound("creeper-explosion.mp3");
        document.getElementById("restart").style.display='block';
        restartButton=document.getElementById("restart");
        restartButton.addEventListener("click",restartGame);
        
        
        

    }

   /* else if(this==currentSkTile)
    {
        score-=5;
        document.getElementById("score").innerText=score.toString();
    }*/
}

function playSound(audioName){
    let audio=new Audio(audioName);
    audio.play();
}

function restartGame(){
    gameover=false;



    score=0;
    setvi();
    setcr();
   // setsk();
   flag=true;
    document.getElementById("restart").style.display='none';
    document.getElementById("score").innerText="0";
    document.getElementById("high").innerText="highscore: "+highScore.toString();
}
/*function setsk(){
    if(gameover)
    {
        return;
    }
    if (currentSkTile)
    {
        currentSkTile.innerHTML="";    }
    let sk=document.createElement("img");
    sk.src="./Skelly-removebg-preview.png";
    let num=randomTile();
    if((currentViTile&&currentViTile.id==num)&&(currentCrTile&&currentCrTile.id==num))
    {
        return;
    }
    currentSkTile=document.getElementById(num);
    currentSkTile.appendChild(sk);
}*/

function highscore(score){
  
  if(score>highScore)
  { 
    if(flag)
    {
        playSound("levelup.mp3");
        flag=false;
    }
    highScore=score;
    
    
  }
  return highScore;
}

