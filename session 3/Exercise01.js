let menu = ["Bánh cuốn", "Bún chả", "Cơm", "Cháo", "Phở"];
console.log(menu);
let loop = true;
while(loop){
let choice = prompt("Welcome to our shop, what do you want? (C, R, U, D, E)");

if(choice === "C")
{ 
   let input = prompt("Bạn muốn thêm món gì");
        menu.push(input);
        console.log(menu);
        
}else if(choice === "R")
{
    let input = prompt("Bạn muốn xem cách làm món gì");
    let indexOfFood = menu.indexOf(input);
    if(indexOfFood == -1) console.log("Không có món bạn muốn xem");
    else console.log("Cách làm món " + input + " là ................");
}
 else if(choice === "U")
{
    let input = prompt("Bạn muốn thay đổi món ăn nào ?");
    let indexOfFood = menu.indexOf(input);
    if(indexOfFood == -1) console.log("Không có món bạn muốn thay đổi");
    else {
        menu[indexOfFood] = prompt("Món mới là:");
        console.log(menu[indexOfFood]);
    }
}
else if(choice === "D")
{
    let input = prompt("Bạn muốn xóa món ăn nào");
    let indexOfFood = menu.indexOf(input);
    if(indexOfFood == -1) console.log("Không có món bạn muốn xóa");
    else {
        menu.splice(indexOfFood,1);
        console.log(menu);
    }
}
else if (choice === "E") loop = false;

}