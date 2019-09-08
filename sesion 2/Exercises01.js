let height = Number(prompt("Nhập chiều cao (cm) :"))/100;
let weight = Number(prompt("Nhập cân nặng (kg):"));
let BMI = weight / (height**2);
let result = null;
    if (BMI < 16) result = "Severely underweight";
    else if (BMI < 18.5) result = "Underweight";
    else if (BMI < 25)  result = "Normal";
    else if (BMI < 30)  result = "Overweight";
    else result = "Obese";
alert(result);

