
let n = +prompt("Hãy Nhập số:");
let num = 2

for(let i = 0;i<= n-1;i++){
    num = num + i;
   if((i+1)%5==0){
       document.write(num+"<br>");}
    else{
        document.write(num+" ");
    }
    
    
}