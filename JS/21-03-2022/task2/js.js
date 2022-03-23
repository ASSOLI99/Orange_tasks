/* 1. Write a JavaScript program that accept two integers and
 * display the larger. Go to the editor */
/******* Start Your Code *********/
let num1 = window.prompt("Enter a number: ");
let num2 = window.prompt("Enter a number: ");
if(num1>num2){
    alert(num1);
}else{
    alert(num2);
}
 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
let num3 = window.prompt("Product  Enter a number:4 ");
let num4 = window.prompt(" Product Enter a number: ");
let num5 = window.prompt("Product Enter a number: ");
product = num3 * num4 * num5;
if(product < 0){
 alert("the sign is -"); 
}else{
 alert("the sign is (“+”)");
}

 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
let num6 = window.prompt("Sort Enter a number: ");
let num7 = window.prompt("Sort Enter a number: ");
let num8 = window.prompt("Sort Enter a number: ");
if(num6 > num7 && num6 > num8){
	if(num7 > num8){
	alert(num6 + " " + num7 +" " + num8);	
}else{
}
alert(num6 + " " + num8 +" " + num7);	
}else if(num7 > num6 && num7 > num8){
if(num6 > num8){
	alert(num7 + " " + num6 +" " + num8);	
}else{
    alert(num7 + " " + num8 +" " + num6);
}
}else{
if(num6 > num7){
    alert(num8 + " " + num6 +" " + num7);	
}else{
    alert(num8 + " " + num7 +" " + num6);	
}
}
 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
let num9 = window.prompt("Lets see which is a bigger number,Enter a number: ");
let num10 = window.prompt("Lets see which is a bigger number,Enter a number:");
let num11 = window.prompt("Lets see which is a bigger number,Enter a number:");
  if(num9 > num10 || num9 > num11 ||  num9 > num4 ||  num9 > num5){
	alert("number"  +  num9 +  "is the biggest")
}else   if(num10 > num9 || num10 > num11 ||  num10 > num4 ||  num10 > num5){
    alert("number"  +  num10 +  "is the biggest")
}else   if(num11 > num10 || num11 > num9 ||  num11 > num4 ||  num11 > num5){
    alert("number"  +  num11 +  "is the biggest")
} else   if(num4 > num10 || num4 > num11 ||  num4> num9||  num4 > num5){
    alert("number"  +  num4 +  "is the biggest")
}else   if(num5 > num10 || num5 > num11 ||  num5 > num4 ||  num5 > num9){
    alert("number"  +  num5 +  "is the biggest")
}
 /******* End Your Code ********* */

 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
let x = window.prompt("Enter a number: ");
let y = window.prompt("Enter a number: ");
  if(x > y){
alert("hello world");
}else{
alert("Goodbye")
}
 /******* End Your Code ********* */
