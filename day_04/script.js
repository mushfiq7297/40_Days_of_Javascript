//Task -01
let day = "Monday";

switch (day){
    case "monday":
        console.log("It's the start of the week");
        break;
        default:
            console.log("It's a normal day.");
}

//Task -2
let askedMoney = 50000;
 if(askedMoney%100 == 0){
    console.log("Withdrawl successful")
 }
 else {
    console.log("Invalid amount")
 }

 //Task -3
 let inputOperator = "+";
 let a = 25, b = 20;

 if(inputOperator == "+"){
    console.log(a + b)
 }
 else if (inputOperator == "-"){
    console.log(a - b)
 }
 else if (inputOperator == "*"){
    console.log(a - b)
 }
 else if (inputOperator == "/")
 {
    console.log(a/b)
 }

 //Task - 4

let age = 32;
 if(age<18){
    console.log("Children : $3")
 }
else  if(age>=18 && age<=60){
    console.log("Adults : $10")
 }
 else if(age>60){
    console.log("Seniors : $8")
 }

 //Task -5

 let birtMonth = "March";
switch (birtMonth){
    case  "January":
    case  "February":
    console.log("Aquarius");
    break;
    case  "February":
    case  "March":
    console.log("Pisces");
    break;
    case  "March":
    case  "April":
    console.log("Aries");
    break;
    case  "April":
    case  "May":
    console.log("Taurus");
    break;
    case  "May":
    case  "June":
    console.log("Gemini");
    break;
    case  "June":
    case  "July":
    console.log("Cancer");
    break;
    case  "July":
    case "August":
    console.log("Leo");
    break;
    case "August":
    case  "September":
    console.log("Vergo");
    break;
    case  "September":
    case  "October":
    console.log("Libra");
    break;
    case  "October":
    case  "November":
    console.log("Scorpio");
    break;
    case  "November":
    case  "December":
    console.log("Aquarius");
    break;
    default:
        console.log("Capricorn")


}

//Task -06

let p =3, q =5, r=2;
if(p==q && q==r && p==r){
    console.log("Equilateral Triangle")
}
else if(p==q || q ==r || p==r){
    console.log("Isosceles Triangle")
}
else if(p!=q && q!=r && p!=r){
    console.log("Scalene Triangle")
}