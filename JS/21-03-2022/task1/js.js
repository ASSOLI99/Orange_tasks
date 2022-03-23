
/*
1
Correct the syntax error
[ 1,7  9  45, ]
answer: [ 1, 7, 9, 45]
["Str" "alex","moh"
answer: ["Str","alex","moh"]
'the','fox' 'over' lazy, 'dog',  ]
answer:['the','fox','over',lazy,'dog']
*/


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]
Banana is index 1  and tomato is index 0
*/


/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
let arr1=["food1" ,"food2","food3","food4","food5"]
let arr2=["football" ,"basketball","boxing"]
let arr3=["intersteller" ,"identity","inseption","v"]


/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
//answer 
function firstOfArray(x) {
    let char = x[0];
    return char;

}
let arr = [1, 4 , 5];
document.write(`${firstOfArray(arr)} <br>`);


/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array
Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

function lastIndex (a){
    lastI = a[a.length -1]
    return lastI
}
let arrL = [1, 4 , 5,5,6,8,7];
document.write(`${lastIndex(arrL)} <br>`)

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)
var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = [0,5,7,9];
array.shift()
array.shift()
array.push(10)
array[0]=8
let arrAdd= [3,4,6];
arrAdd.unshift(1)
document.write(`${arrAdd.concat(array)} <br>`)
/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you
*/

var array2 = [5,9,-7,3.5]
array2.push(10) // add an element at the end of an array
array2.unshift(10)// add an element at the start of an array
array2.shift() // delete an element at the start of an array
array2.pop()// delete an element at the end of an array
document.write(`${array2} <br>`)


/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets
Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
function middleOfArray (arrayFun){
    let i;
    if (arrayFun.length % 2 === 0){
        i = arrayFun.slice((arrayFun.length) / 2 - 1 , (arrayFun.length ) / 2 + 1)
    }else {
        i = arrayFun.slice((arrayFun.length) / 2 , (arrayFun.length ) / 2 + 1)
    }
    return i
}
var arraytest = [1,2,3,4,5,6,7,8,9,10]
document.write(middleOfArray(arraytest))
document.write(`<br>`)
/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something
var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
let animals = [] ; 
length.animals = 5 ;
animals[0] = ['zebra']
animals[1] = ['elephant']
document.write(`${animals[0]} <br>`)
document.write(`${animals[1]} <br>`)
/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index
var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9
**try more cases by your self
*/
function indexOfArray (num , ind){
    arrIndex = num[ind]
    return arrIndex;
}
let arrayIndex = ["this is index zero","this is index one","this is index two", "this is index three", "this is index four", "this is index five" ]
document.write(`${indexOfArray(arrayIndex , 4)} <br>`)

/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]
**try more cases by your self
*/

function arrayExceptLast (arr5){
    let cutArray = arr5.slice(0, arr5.length - 1)
    return cutArray;
}
let cutted = [0,1,2,3,4,5]
document.write(` ${arrayExceptLast(cutted)} <br>`)
/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array
var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]
**try more cases by your self
*/
function addToEnd(add, addedN) {
    add.push(addedN)
    return add;
}
let addedar = [0,1,2,3,4]
document.write(`${addToEnd(addedar,5)} <br>`)
// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array
var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function sumArray (cm){
let final=0;
for (i=0 ; i< cm.length ; i++){
    final += cm[i]
}
return final ;
}
document.write(`${sumArray([1,2,3,8,9])} <br>`)




/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array
var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function minInArray(minA){
    let minN;
    for(i=0 ; i<minA.length; i++){
        if (minA[0] < minA[i] && minA[i] > minA[i + 1]){
            minN= minA[0]
        }else if (minA[0] > minA[i]){
            minN= minA[i]
        }
    }return minN
}
document.write(`${minInArray([2,3,1,5,5,5,5,5,5,5,5])} <br>`)

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it
var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function removeFromArray(fil, exclude) {
    let index = fil.indexOf(exclude)
    fil.splice(index, 1)
    return fil
  }
  
  let filtered = [12, 5, 8, 130, 44]
document.write(`${removeFromArray(filtered,130)} <br>`)

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts
var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function oddArray(oddA){
    for (i = 0 ; i < oddA.length ; i++){
        if(oddA[i] % 2 === 0){
            oddA.splice(i , 1)
        }
    }
    return oddA
}
let oddNumber = [1,2,3,4,5,6,7,8,9,10]
document.write(`${oddArray(oddNumber)} <br>`)
/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array
var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6
var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function aveArray(avgA){
    let avarage = 0;
    for(i=0 ; i < avgA.length ; i++){
        avarage += avgA[i] / avgA.length
    }
    return avarage
}
let avgTest = [1,2,3,4,5,6,7,8,9,10]
document.write(`${aveArray(avgTest)} <br>`)
/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// function shorterInArray(shortA){
//     for (i = 0 ; i < shortA.length ; i++){
//         if ()
//     }
// }
function shorterInArray(short){
    let index = 0;
    for(let i = 1; i < short.length ; i++){
        if(short[i].length < short[0].length){
            short[0].length = short[i].length;
            index = i;
        }
    }
    return index;
}
shortt= ["alex","mercer","madrasa","rashed2","emad","hala"]
shorterInArray(shortt)
document.write(`${shortt[shorterInArray(shortt)]} <br>`)



/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string
var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function repeatChar (string,count){
    let counter = 0
    for (i = 0 ; i< string.length ; i++){
        if (string[i].includes(count)){
            counter++
        }
    }
    return counter;
}
let repeatCharTest =  "alex mercer madrasa rashed2 emad hala"
document.write(`${repeatChar(repeatCharTest,"a")} <br>`)
/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenIndexOddLength(string){
    var newArr = [];
    var index = 0;

    for(let i = 0; i < string.length ; i++){   
        if(string[i].length % 2 != 0 && i % 2 == 0){
            newArr[index] = string[i];
            index++;
        }
    }

    return newArr;
}
let evenIndexOddLengthTest = ["alex","mercer","madrasa","rashedd2","emad","hala"]
document.write(`${evenIndexOddLength(evenIndexOddLengthTest)} <br>`)
/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self
var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function powerElementIndex(number){
    var newArr = [];
    for(let i = 0 ; i < number.length;i++){
        newArr[i] = Math.pow(number[i] , i);
    }
    return newArr;
}
let powerElementIndexTest = [44, 5, 4, 3, 2, 10]
document.write(`${powerElementIndex(powerElementIndexTest)} <br>`)
/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index
var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function evenNumberEvenIndex(string){
    let newArr = [];
    let increment = 0;

    for(let i = 0; i < string.length ; i++){   
        if(string[i] % 2 == 0 && i % 2 == 0){
            newArr[increment] = string[i];
            increment++;
        }
    }

    return newArr;
}
let evenNumberEvenIndexTest = [5,2,2,1,8,66,55,77,34,9,55,1]
document.write(`${evenNumberEvenIndex(evenNumberEvenIndexTest)} <br>`)