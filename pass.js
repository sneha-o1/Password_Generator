function pass(){
    let alpha=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let num=[0,1,2,3,4,5,6,7,8,9,];
let spe=['#','@','*','%','&'];
let result='';
for(let i=1;i<=3;i++){
    let a=Math.floor(Math.random()*alpha.length);
    result+=alpha[a];
    let n=Math.floor(Math.random()*num.length);
    result+=num[n];
    let s=Math.floor(Math.random()*spe.length);
    result+=spe[s];
}
document.getElementById('display').innerText="Your Password is - "+  result;
  
}