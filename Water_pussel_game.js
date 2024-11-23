///Number of glasses
const num_glass=8;
///Number of colour liqueds
const num_liqued=4;

let star_i=3;

const w_height=((100-num_liqued)/num_liqued);

//const colorList=["blue","red","yellow","green","aqua"];
const colorList = [
  "blue", "red", "yellow", "green", "aqua", 
  "navy", "teal","skyblue", "turquoise",
  "purple", "orange", "pink", "lime", "indigo", 
  "violet"
];



const g_m=document.querySelector(".g_m");
let w_db = Array.from({ length: num_glass }, () => Array(num_liqued).fill(''));
let r_w_db = Array.from({ length: num_glass }, () => Array(num_liqued).fill(''));
let rand = Array.from({ length: 2 }, () => Array(num_liqued).fill(''));
let rand_value= Array.from({ length: num_glass}, () => Array(num_liqued).fill(''));
let glass_db=[];
let cap_db=[];
let filled_glass=0;

const star=document.querySelectorAll(".star i");
/*star[0].innerText="hi";
star[0].style.backgroundColor="#0ff";
star[0].style.color="#000000";*/
let stars_grading=()=>{

 if(filled_glass>num_glass-Math.floor(num_glass/4)-1& star_i==2 || filled_glass>num_glass/2  & star_i==1 || filled_glass>Math.floor(num_glass/4) & star_i==0){
  //  star[star_i].style.display="flex";
  //  star[star_i+3].style.display="flex";
   star[star_i].style.color="#feb56a";
   star[star_i+3].style.color="yellow";
    star_i++;
  }
}



function game(play_again_c){
for(let y=0;y<num_glass;y++){
  rand[0][y]=y;
  rand[1][y]=0;
}
//console.log(rand);
const glass=document.querySelector(".glass");
u=0;
v=0;
let col=0;
let pre_col=0;
let pre_col_count,col_count;
pre="";
clash=1;
uj=0;
let w_pos=[];


for(let y=0;y<num_glass;y++){
 
  w_pos[y]=5+y*19;
  w_pos[y]=5+y*w_height;
  //console.log((100-num_liqued)/num_liqued);
}
//console.log(w_pos);

for(let y=0;y<num_glass;y++){
  for(let x=0;x<num_liqued;x++){
    r_w_db[y][x]=-1;
    w_db[y][x]="";
    glass_db[y]="";
    cap_db[y]="";
  }
}

let pre_left=[];
let pre_top=[];
let cap_top=[];
let s_pre_top=[];
let on_left=[];
let on_top=[];

const positions=()=>{
for(let i=0;i<num_glass;i++){
  if(i==num_glass/2){
    u=0;
    v++;
  }
  gap_of_glass=Math.floor(100/(num_glass/2));
pre_left[i]=`${10+u*33}vw`;
pre_left[i]=`${gap_of_glass/num_glass*2+u*gap_of_glass}vw`;

//console.log(gap_of_glass)
cap_top[i]=`${16+v*38}vh`;
pre_top[i]=`${20+v*38}vh`;
s_pre_top[i]=`${16+v*38}vh`;
on_left[i]=`${u*gap_of_glass-gap_of_glass}vw`;
on_top[i]=`${v*38}vh`;
u++;
}
}
positions();

s_t=on_top[0];
s_l=on_left[0];

//const colorList=["#0000ff66","#ff000066","#ffff0066","#00800066","#00ffff66"];


const clear_stars=()=>{

star_i=0;
for(let y=0;y<3;y++){
 // star[y].style.display="none";
//  star[y+3].style.display="none";
star[y].style.color="#00000000";
star[y+3].style.color="#00000000";
}
}

clear_stars();


let pre_z=0;
let z=1;

for(let i=0;i<num_glass;i++)
{
const glass_s=document.createElement("div");
glass_s.classList.add("glass");
const cap=document.createElement("div");
cap.classList.add("cap");
cap_db[i]=cap;

for(let j=0;j<num_liqued;j++){
 const w_s=document.createElement("div");
 w_s.classList.add("w");
 w_s.style.height=`${w_height}%`;
 w_s.style.top=`${w_pos[j]}%`;
const game_creation=()=>{
if(play_again_c){
ju=num_glass-Math.floor(num_glass/4);
if(i<ju){
r_value=Math.floor(Math.random() * ju);
  let create=(r)=>{
  for(let r_i=0;r_i<ju;r_i++){
    if(rand[0][r_i]==r){
   if(rand[1][r_i]<num_liqued){
    w_s.style.backgroundColor=colorList[r];
     w_s.style.backgroundColor=colorList[rand[0][r_i]];
     rand_value[i][j]=r;
     r_w_db[i][j]=r;
     rand[1][r_i]++;
     break;
      }
      else{
       r_value=Math.floor(Math.random() * ju);
        create(r_value);
      }
    }
    
    
  }
  
  }
  create(r_value);
    }
 else{
  w_s.style.backgroundColor="";
  r_w_db[i][j]=-1;
}

}
else{
  if(i<num_glass-Math.floor(num_glass/4)){

     w_s.style.backgroundColor=colorList[rand_value[i][j]];
     r_w_db[i][j]=rand_value[i][j];
    }
    else{
  w_s.style.backgroundColor="";
  r_w_db[i][j]=-1;
}

}
}
game_creation()
//w_s.innerText=r_w_db[i][j];
  w_db[i][j]=w_s;
  glass_s.append(w_s);
}

glass_s.style.left=pre_left[i];
glass_s.style.top=pre_top[i];
cap.style.left=pre_left[i];
cap.style.top=cap_top[i];
cap.style.display="none";

glass_s.addEventListener("click",()=>{
  if(pre_z!=z){
    pre_z=z;
  if(z%2==0 & clash){
    if(pre){
      pre.style.boxShadow="0 0 1vh 0 #00000099";
      pre.style.top=pre_top[pre_i];
    }
    col=-1;
    col_count=0;
  for(let y=0;y<num_liqued;y++){
     if(r_w_db[i][y]==-1){
       col=y;
       col_count++;
     }
   }
   let color_match=true;
   if(col!=-1 & col<num_liqued-1){
    color_match=(w_db[i][col+1].style.backgroundColor==w_db[pre_i][pre_col].style.backgroundColor )
   }
  if(pre_i!=i & col!=-1 & color_match){
   
      if(pre_col_count<=col_count){
    for(let o=0;o<pre_col_count;o++){
    w_db[i][col-o].style.top="-20%";
    }
      }
      else if(col_count>0){
        pre_col_count=col_count;
    for(let o=0;o<pre_col_count;o++){
    w_db[i][col-o].style.top="-20%";
    }
      }
    else{
    //  console.log(col_count);
      w_db[i][col].style.top="-20%";
    }
    
    pre.style.left=on_left[i];
    pre.style.top=on_top[i];
    pre.style.rotate="80deg";
    pre.style.zIndex=10;
 setTimeout(()=>{
   if(pre_col_count<=col_count){
    for(let o=0;o<pre_col_count;o++)
    {
   w_db[pre_i][pre_col+o].style.top=`${w_pos[pre_col+pre_col_count]}%`;
    w_db[i][col-o].style.top=`${w_pos[col-o]}%`;
  w_db[i][col-o].style.backgroundColor=w_db[pre_i][pre_col+o].style.backgroundColor;
   }
 }
 else if(col_count>0){
        pre_col_count=col_count;
    for(let o=0;o<pre_col_count;o++)
    {
   w_db[pre_i][pre_col+o].style.top=`${w_pos[pre_col+pre_col_count]}%`;
    w_db[i][col-o].style.top=`${w_pos[col-o]}%`;
  w_db[i][col-o].style.backgroundColor=w_db[pre_i][pre_col+o].style.backgroundColor;
   }
 }
   else{
     w_db[pre_i][pre_col].style.top=`${w_pos[pre_col+1]}%`;
     w_db[i][col].style.top=`${w_pos[col]}%`;
     w_db[i][col].style.backgroundColor=colorList[pre_col];
//  w_db[i][col].innerText=r_w_db[pre_i][pre_col];
   
//  w_db[pre_i][pre_col].innerText=r_w_db[i][col];
  w_db[i][col].style.backgroundColor=w_db[pre_i][pre_col].style.backgroundColor;
   }

   setTimeout(()=>{
     if(pre_col_count<=col_count){
    for(let o=0;o<pre_col_count;o++)
    {
     w_db[pre_i][pre_col+o].style.backgroundColor=""; 
     tem=r_w_db[i][col-o];
     r_w_db[i][col-o]=r_w_db[pre_i][pre_col+o];
     r_w_db[pre_i][pre_col+o]=tem;
   //  console.log(r_w_db[i][col-o],r_w_db[pre_i][pre_col+o])
    }
     }
     else if(col_count>0){
        pre_col_count=col_count;
    for(let o=0;o<pre_col_count;o++)
    {
     w_db[pre_i][pre_col+o].style.backgroundColor=""; 
     tem=r_w_db[i][col-o];
     r_w_db[i][col-o]=r_w_db[pre_i][pre_col+o];
     r_w_db[pre_i][pre_col+o]=tem;
   //  console.log(r_w_db[i][col-o],r_w_db[pre_i][pre_col+o])
    }
     }
    else{
   w_db[pre_i][pre_col].style.backgroundColor="";
   tem=r_w_db[i][col];
     r_w_db[i][col]=r_w_db[pre_i][pre_col];
     r_w_db[pre_i][pre_col]=tem;
    }
    
     
     setTimeout(()=>{
       
    if(pre_col_count<=col_count){
    for(let o=0;o<pre_col_count;o++)
     w_db[pre_i][pre_col+o].style.top=`${w_pos[pre_col+o]}%`;
   }
   else if(col_count>0){
        pre_col_count=col_count;
    for(let o=0;o<pre_col_count;o++)
     w_db[pre_i][pre_col+o].style.top=`${w_pos[pre_col+o]}%`;
   }
   else{
     w_db[pre_i][pre_col].style.top=`${w_pos[pre_col]}%`;
   }
    /*   for(let y=0;y<num_liqued;y++){
     if(r_w_db[i][y]==-1){

      // console.log(col,pre_col);
     }
   }*/
   
   clash=1;
  check();
   },250);
   },250);
 },250);
    
   clash=0;
    setTimeout(()=>{
     
      pre.style.zIndex=1;
      pre.style.left=pre_left[pre_i];;
      pre.style.top=pre_top[pre_i];
      glass_s.style.boxShadow="0 0 1vh 0 #00000099";
     // console.log(pre_left[pre_i]);
      pre.style.rotate="0deg";
     z++;
    },750);
  }
  else{
    z+=1;
  }
  
  }
  else{
    for(let y=0;y<num_liqued;y++){
     if(r_w_db[i][y]!=-1){
       pre_col=y;
       break;
     }
     else{
       pre_col=-1;
     }
   }
   pre_col_count=0;
   if(pre_col!=-1){
   for(let y=pre_col;y<num_liqued;y++)
   {
     if(w_db[i][pre_col].style.backgroundColor==w_db[i][y].style.backgroundColor)
     {
       pre_col_count++;
     }
     else{
       break;
     }
   }
   }
   //console.log(pre_col,pre_col_count);
  if(clash & pre_col!=-1 & cap.style.display!="flex"){
    //console.log("hello");
    s_t=on_top[i];
    s_l=on_left[i];
    glass_s.style.boxShadow="0 0 2vh 0 white inset,0 0 1vh 0 #00000099 inset,0 0 1vh 0 black";
    pre=glass_s;
    glass_s.style.zIndex=2;
    pre.style.top=s_pre_top[i];
    pre_i=i;
    z++;
    clash=1;
    }
    else{
      z+=2;
    }
  }
  }
    
})

glass_db[i]=glass_s;
g_m.append(glass_s);
g_m.append(cap);
}


}

function check(){
  filled_glass=0;
  
  for(let j=0;j<num_glass;j++){
    let u=1;
    for(;u<num_liqued;u++){
    //  console.log(r_w_db[j][u]);
      if(r_w_db[j][u]!=r_w_db[j][0] || r_w_db[j][0] ==-1){
        
        break;
      }
    }
    if(u==num_liqued){
   cap_db[j].style.display="flex";
   filled_glass++;
   if(star_i<3){
  stars_grading();
  }
    }
    else{
      cap_db[j].style.display="none";
    }
  }
  
  
  if(filled_glass==num_glass-Math.floor(num_glass/4))
  {
    const win=document.querySelector(".win");
  //  win.innerText="win";
    const statement=document.querySelector(".statement");
    statement.style.display="flex";
    const play_again=document.querySelector(".play_again");
    const next_level=document.querySelector(".next_level");
    play_again.addEventListener("click",()=>{
    //  console.log(rand_value);
   for(let j=0;j<num_glass;j++){
     
    glass_db[j].remove();
    cap_db[j].remove();
  }
      game(0);
      statement.style.display="none";
    })
    
    next_level.addEventListener("click",()=>{
   for(let j=0;j<num_glass;j++){
    glass_db[j].remove();
    cap_db[j].remove();
  }
      game(1);
      statement.style.display="none";
    })
    
  }
}


function reset_game(){
  const reset=document.querySelector(".reset");
  const reset_i=document.querySelector(".reset i");
  
  reset.addEventListener("click",()=>{
   reset_i.style.rotate="360deg";
   for(let j=0;j<num_glass;j++){
    glass_db[j].remove();
    cap_db[j].remove();
  }
  
      game(0);
      setTimeout(()=>{
        reset_i.style.rotate="0deg";
      },1000)
    })
}




game(1);
reset_game();