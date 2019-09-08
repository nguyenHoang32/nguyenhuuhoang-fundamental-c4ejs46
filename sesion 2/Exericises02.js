let number = Number(prompt("Nhập số :"));
var giaiThua = 1;
if(number === 0 ) alert(number + "! = 1");
else
{
    for(let i = 1; i <= number; i++)
    {
     giaiThua = giaiThua * i;
    }
    alert(number + "! = " + giaiThua);
}