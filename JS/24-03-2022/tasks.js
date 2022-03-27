/*/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
*/

// var persons = {
//     firstName: "bahaa",
//     lastName: "zyoud",
//     age: 22,
//     dateOfBirth: 18 / 7 / 2000,
//     favoriteFood: ["mansaf with meat(mansaf in chicken does not resepected at jordan)", "tomato fry with eggs hhhhh ", "small watermelon ja3bora in jordan"],
//     favoriteMovie: ["ipMan", "ipMan2", "ipMan3", "ipMan4", "thePrestege"]
// };
// document.write(persons.favoriteMovie);
// document.write("<br>")
// document.write(persons.firstName);

/*
2
Using the varabile persons
Create a function called firstName
that accept an object
and return all the first name of the person insides

Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
*/
// function firstName(persons) {
//     this.firstName = persons;
// }
// let Name = new firstName("Bahaa");
// let Name1 = new firstName("Assoli");
// let Name2 = new firstName("Ashraf");
// document.write(Name.firstName);
// document.write("<br>");
// document.write(Name1.firstName);
// document.write("<br>");
// document.write(Name2.firstName);

/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons

Ex: averageAge(persons) => 41.2
*/
// function averageAge(...persons) {
//     this.persons = persons;
//     var total = 0;
//     var len = persons.length;
//     for (var i = 0; i < len; i++) {
//         total += persons[i];
//     }
//     return total / len;
// }
// var avarege = averageAge(10, 25, 5, 84, 8, 44);
// var avarege1 = averageAge(10, 25, 5, 8999, 8, 44);
// document.write(avarege);
// document.write("<br>");
// document.write(avarege1);

/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person

Ex: olderPerson(persons) => "Soso Al-Amora"
*/
// function olderPerson(...persons) {
//     let str = "";
//     let len = persons.length;
//     this.persons = persons;
//     for (let i = 0; i < len; i++) {
//         str += persons[i] + " ";
//     }
//     return str;
// }
// let fullName = olderPerson("bahaa", "ahmed", "zyoud");
// document.write(fullName);

/*
5
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/
// function longestName(...persons) {
//     this.persons = persons;
//     let len = persons.length;
//     let maxStr = persons[0];
//     for (let i = 0; i < len; i++) {
//         if (persons[i].length > persons[0].length) {
//             maxStr = persons[i];
//         }

//     }
//     return maxStr;
// }
// let fullName = longestName("bahaaAhmed", "ahmedAli", "aaaaimanZyoud");
// document.write(fullName);
 /*
//////////////////////////////////////////////////////////////////

/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??

Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
=> {
  my:1,
  name:2,
  is:1,
  alex:1,
  mercer:1,
  class:1,
  b:1,
  baba:1,
  mama:1,
  hello:3
}
*/
// function repeatChar(strings) {
//     split = str.toLowerCase().split(" "),
//         obj = {};
//     for (let i = 0; i < split.length; i++) {
//         if (obj[split[i]] === undefined) {
//             obj[split[i]] = 1;
//         } else {
//             obj[split[i]]++;
//         }
//         return obj;
//     }
// }
// let str = "I am not gonna live forever, but I wanna live while I am alive";
// document.write(repeatChar(str));

/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??

Ex: repeatChar("mamababatetacedo")
=> { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/
// function repeatChar(strings) {
//     split = str.toLowerCase().split(""),
//         obj = {};
//     for (let i = 0; i < split.length; i++) {
//         if (obj[split[i]] === undefined) {
//             obj[split[i]] = 1;
//         } else {
//             obj[split[i]]++;
//         }
//         return obj;
//     }
// }
// let str = "mamababatetacedo";
// document.write(repeatChar(str));

/*
9
Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array

Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
=>  {a: 1, cat: 3}
*/
// function selectFromObject(obj, arr) {
//     let converter = Object.keys(obj);
//     for (let i = 0; i < arr.length; i++) {
//         if (converter[i] != arr[i]) {
//             delete obj[converter[i]];
//         }

//     }
//     return obj;
// }
// let select = selectFromObject({
//     a: 1,
//     cat: 3,
//     b: 1
// }, ['a', 'cat', 'd']);
// console.log(select);
// /*/