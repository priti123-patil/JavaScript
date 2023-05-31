const getVal=()=>{
    let num = prompt("Enter a number");
num = Number.parseInt(num);
return num>4?true:false;
}
if(getVal)
{
    location.href = "https://google.com"
}