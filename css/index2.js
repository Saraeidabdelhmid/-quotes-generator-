// 1) var num=Number(window.prompt('enter your number'));
//  console.log((num));



// 2) var num=Number(window.prompt('enter your number'));


//  if(num%3==0 && num%4==0){
//     console.log('yes');

// }

// else{
//     console.log('no');

// }




// 3) var num1=Number(window.prompt('enter your number1'));
// var num2=Number(window.prompt('enter your number2'));


//  if(num1>num2){
//     console.log(num1);

// }

// else{
//     console.log(num2);

// }



// 4) var num1=Number(window.prompt('enter your number1'));

//  if(num1<0){
//     console.log('Output negative ');

// }

// else{
//     console.log('Output positiv');

// }







//5) var num1=Number(window.prompt('enter your number1'));
// var num2=Number(window.prompt('enter your number2'));
// var num3=Number(window.prompt('enter your number3'));
// var maxNum = num1;
// var minNum = num1;


//             if (num2 > maxNum) {
//                 maxNum = num2;
//             }
//             if (num2 < minNum) {
//                 minNum = num2;
//             }


//             if (num3 > maxNum) {
//                 maxNum = num3;
//             }
//             if (num3 < minNum) {
//                 minNum = num3;
//             }

//             console.log('Max element =' + minNum ,'\n','Max element =' + maxNum);



// 6) var num=Number(window.prompt('enter your number'));


//  if(num%2==0 ){
//     console.log(' even');

// }

// else{
//     console.log(' odd');

// }




// 7) var char=window.prompt('enter vowel chars');

//  if(char=='o' || char=='O' ){
//     console.log('vowel');}


// else if(char=='a' || char=='A' ){
//     console.log('vowel');

// }

//  else if (char=='e' || char=='E' ){
//     console.log('vowel');
//  }

// else if (char=='i' || char=='I' ){
//     console.log('vowel');}

// else if (char=='u' || char=='U' ){
//     console.log('vowel');}

// else{
//     console.log('constant');

// }




// 8) var num=Number(window.prompt('enter your number'));
// for(var i=1; i<=num;i++){
//     console.log(i);
// }



// // 9)
//  var num=Number(window.prompt('enter your number'));
// for(var i=0; i<12;i++){
//     console.log(num); 
//   num+=5;

// }




// // 10)

// var num=Number(window.prompt('enter your number'));
// for(var i=1; i<num;i++){
//     if(i%2==0){
//     console.log(i); }

// }



// // // 11)
// var num = Number(window.prompt('enter your number'));
// var pow = Number(window.prompt('enter your power'));
// var result = 1; 
// var i = 0; 

// while (i < pow) {
//     result = result * num; 
//     i++;
// }

// console.log(result);


// // 12)
// var mark1 = Number(window.prompt('enter your mark1'));
// var mark2 = Number(window.prompt('enter your mark2'));
// var mark3 = Number(window.prompt('enter your mark3'));
// var mark4 = Number(window.prompt('enter your mark4'));
// var mark5 = Number(window.prompt('enter your mark5'));

// var total =mark1+mark2+mark3+mark4+mark5
// var averg =(total)/5
// var Percentage =((total)*100)/500

// console.log(total);
// console.log(averg);
// console.log(Percentage);



//  // 13)

// var num = window.prompt('enter your number');


// if(num=='Month Number: 2'){
//     console.log('Days numn Month: ',28);
// }
// else if(num== 'Month Number: 4' ||num=='Month Number: 6'|| num=='Month Number: 10' || num=='Month Number: 11'){
//     console.log('Days in Month: ',30);
// }

// else {

//     console.log('Days in Month: ',31);
// }




// 14)
// var physics = Number(window.prompt('Enter your Physics marks:'));
// var chemistry = Number(window.prompt('Enter your Chemistry marks:'));
// var biology = Number(window.prompt('Enter your Biology marks:'));
// var mathematics = Number(window.prompt('Enter your Mathematics marks:'));
// var computer = Number(window.prompt('Enter your Computer marks:'));


// var totalMarks = physics + chemistry + biology + mathematics + computer;

// var percentage = (totalMarks / 500) * 100;

// var grade;
// if (percentage >= 90) {
//     grade = 'A';
// } else if (percentage >= 80) {
//     grade = 'B';
// } else if (percentage >= 70) {
//     grade = 'C';
// } else if (percentage >= 60) {
//     grade = 'D';
// } else if (percentage >= 40) {
//     grade = 'E';
// } else {
//     grade = 'F';
// }

// // Display results
// console.log("Percentage: " + percentage.toFixed(2) + "%");
// console.log("Grade: " + grade);




// * Using switch case



// 15

// var month=Number(window.prompt('enter your age'));

// switch(month){


// case 2:

//   console.log(28);
// break;

// case 4:

//   console.log(30);
// break;

// case 6:

//   console.log(30);
// break;

// case 10:

//   console.log(30);
// break;

// case 11:

//   console.log(30);
// break;

// default :{
//     console.log(30);
// }


// }





// 16
// var letter =window.prompt("Enter an alphabet:").toLowerCase();
// switch (letter) {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//         console.log(letter + " is a vowel.");
//         break;
//     default:
//         console.log(letter + " is a consonant.");
// }


// // 17
// var num1 =Number(window.prompt("Enter a number1"));
// var num2 =Number(window.prompt("Enter a number2"));
// switch (true) {
//     case (num1 > num2):
//         console.log("The maximum number is: " + num1);
//         break;
//     case (num2 > num1):
//         console.log("The maximum number is: " + num2);
//         break;
//     default:
//         console.log("Both numbers are equal: " + num1);
// }



// // 18
// var num1 =Number(window.prompt("Enter a number1"));

// switch (true) {
//     case (num1%2==0):
//         console.log("The number is: even ");
//         break;
//     default:
//         console.log("The number is: odd" );
// }





// // // 19

// var num =Number(window.prompt("Enter a number"));
// switch (true) {
//     case (num>0):
//         console.log("The number is: positive ");
//         break;

//         case (num<0):
//             console.log("The number is: negative  ");
//             break;
//     default:
//         console.log("The number is: zero " );
// }





//  // 19

// var num1 =Number(window.prompt("Enter a number1"));
// var operation =window.prompt("Enter a operation");
// var num2 =Number(window.prompt("Enter a number2"));


// switch (operation) {
//     case '*':
//         console.log(num1*num2);
//         break;
//         case '+':
//             console.log(num1+num2);
//             break;
//             case '/':
//                 console.log(num1/num2);
//                 break;

//                 case '%':
//                     console.log(num1%num2);
//                     break;

// default:{
//     console.log("Invalid operation. Please enter one of +, -, *, /.");
// }

// }








// function getaverg (x,y) {

// var sum =x+y;
// var averg =sum/2;
// return  averg;

// }


// function getprice (cost,ads,tax,profit){

// var price= cost + (cost*tax);
// var price1= price + ads;
// var finalprice =price1+profit;
// return finalprice ;

// }

// console.log(getprice(getaverg(1000,2000),200,0.14,300));





// var person =  {
// name:'ahmed',
// age:21,
// mael1 : function(meal){
//     return meal 
// },
// wife: {fullname:'Aya' ,age: 25, son :{fullname:'adam ',age:13}}

// }
// console.log(person.mael1('apple'))
// console.log(person.wife.son.age)



var friend = ['sara', 'ahmed', 'mohammed', 'ali', 'ahmed']
function search(searchitem, searchar) {

    var arr = [];
    console.log('hello');

    for(var i = 0; i < searchar.length; i++) {
        
        if (searchar[i] == searchitem) {

            
            arr.push(i);

        }

    }

    if (arr.length == 0) {
        return -1

    }

    return arr
}

console.log(search('aza', friend));