//check Palindrome

let str="NAMAN"
let bag="";

for(let i=str.length-1;i>=0;i--){
   
  bag+=str[i];

  }
if(bag==str){
  console.log("Yes);
}else{
  console.log("No");
}





//prime problem


let factor=0;

let num=19;

for(let i=1;i<=num;i++){
  
  
if(num%i==0){
  factor++;
}
}

if(factor==2){
   
  console.log("Prime");
}else{
   console.log("Not Prime){
 }









