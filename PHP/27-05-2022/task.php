<?php

// PHP Basic Tasks 
// Wednesday 27-4-2022     
// Create new folder “FunctionPHPTask_27-April-2022                                               Duration: 4 Hour            
// Functions
//     1. Write a PHP script to check if the inserted number is a prime number 

// Sample Input:  3
// Expected Output: 3 is a prime number 

function Prime($n)
{
    if($n ==1)
        {
            return "$n is not a prime number ";
        }
 for($i=2; $i<$n; $i++)
   {
        if($n %$i ==0)
        {
            return "$n is not a prime number ";
        }
    }
        return "$n is a prime number ";
   }
echo Prime(1);


//     2. Write a PHP script to reverse a string 

// Sample Input:  remove
// Expected Output: evomer
function reverse($str){
    return strrev($str);
}
echo reverse("remove");

//     3.  Write a PHP script to check if the all string characters are lower cases

// Sample Input:  remove
// Expected Output: Your String is Ok 

function isLowerCase($str){
    if($str === strtolower($str)){
        return "Your String is Ok ";
    }
    else{
        return "Your String is not all lowercase";
    }
}
echo isLowerCase("remove");

//     4. Write a PHP function to swap to variables?
// Sample Input:  x = 12     y= 10
// Expected Output: y=12   x=10 

function swap($x , $y){
    $temp = $x;
    $x = $y;
    $y = $temp;
    return "y = $y , x = $x";
}
echo swap(12 , 10);

//     5. Write a PHP function to swap to variables? REPEATED

// Sample Input:  x = 12     y= 10
// Expected Output: y=12   x=10 


// 6.    Write a PHP function to check if a number is an Armstrong number or not ? 
//  ​ **Armstrong number is a number that is equal to the sum of cubes of its digits. 
  
//  ​Sample Input:  407 
//  ​Expected Output: 407 is Armstrong Number 
//  ​ */
 
 ​function​ ​armstrongNum($​num​){ 
 ​    ​$​len​ = ​strlen(​$​num​); 
 ​    ​$​sum​ = ​0​; 
 ​    ​$​num​ = (​string​)​$​num​; 
 ​    for(​$​i​=​0​; ​$​i​<​$​len​; ​$​i​++){ 
 ​        ​$​sum​ +=  ​pow​(​$​num​[​$​i​],​3​); 
 ​    } 
 ​    ​if​(​$​sum​ == ​$​num​) 
 ​    ​echo​ ​"$num is Armstrong Number"​; 
 ​    ​else 
 ​    ​echo​ ​"$num is NOT Armstrong Number"​; 
  
 ​} 
 ​armstrongNum​(​407​);  
 ​/* 
 ​7.    Write a PHP function that checks whether a passed string is a palindrome or not? 
 ​Sample Input:  Eva, can I see bees in a cave? 
 ​Expected Output: Yes it is a palindrome */ 
  

 ​echo​ ​"<br><br>"​; 
 ​function​ ​isPalindrome​(​$​string​) 
 ​{ 
 ​    ​if​ (​strcasecmp​(​strrev​(​$​string​),​$​string​)==​0​) { 
 ​        ​echo​ ​"Yes it is a palindrome"​; 
 ​    } ​else​ { 
 ​       ​echo​ ​"No it is not a palindrome"​; 
  
 ​    } 
  
 ​} 
 ​echo​ ​isPalindrome​(​'Mum'​) . ​"\n"​; 
  
 ​echo​ ​"<br><br>"​; 
  
 ​/* 
 ​8.    Write a PHP function to remove duplicates from an array ? 
  
 ​Sample Input: 
  
 ​$array1 = array(2, 4, 7, 4, 8, 4); 
  
 ​Expected Output: 
  
 ​$array1 = array(2, 4, 7, 8); 
 ​ */ 
 ​$​array1​ = ​array​(​2​, ​4​, ​7​, ​4​, ​8​, ​4​); 
  
 
 ​echo​ ​"<br><br>"​; 
 ​function​ ​removeDuplicate​(​$​arr​){ 
 ​    ​$​newArr​ = ​array_unique​(​$​arr​); 
 ​    ​print_r​(​$​newArr​); 
 ​} 
 ​removeDuplicate​(​$​array1​); 
 ​echo​ ​"<br><br>"​;
