/*
 * Exercise 1:
 *
 * Make an array of numbers that are doubles of the first array
 *
 * Test Case:
 *
 * console.log(doubleNumbers([2, 5, 100]));
 *
 * Result:
 * [4, 10, 200]
 */
function doubleNumbers(double) {
    for (let i = 0; i < double.length; i++) {
      double[i] = double[i] * 2;
    }
    return double;
  }
  console.log(doubleNumbers([2, 5, 100]));
  /*
   * Exercise 2 :
   *
   * Take an array of numbers and make them strings
   *
   * Test Case:
   *
   * console.log(stringItUp([2, 5, 100]));
   *
   * Result:
   * ["2", "5", "100"]
   */
  
  function stringItUp(string) {
    newArr = [];
    for (i = 0; i < string.length; i++) {
      newArr[i] = string[i].toString();
    }
  
    return newArr;
  }
  console.log(stringItUp([2, 5, 100]));
  /*
   * Exercise 3:
   *
   * Capitalize each of an array of names
   *
   * Test Case:
   *
   * console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
   *
   * Result:
   *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
   */
  
  function capitalizeNames(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1);
    }
    return arr;
  }
  document.write(
    `${capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])} <br>`
  );
  
  /*
   * Exercise 4:
   *
   * Make an array of the names in h1s, and the ages in h2s
   *
   * Test Case:
   *
   * console.log(readyToPutInTheDOM([
   *   {
   *       name: "Angelina Jolie",
   *       age: 80
   *   },
   *   {
   *       name: "Eric Jones",
   *       age: 2
   *   },
   *   {
   *       name: "Paris Hilton",
   *       age: 5
   *   },
   *   {
   *       name: "Kayne West",
   *       age: 16
   *   },
   *   {
   *       name: "Bob Ziroll",
   *       age: 100
   *   }
   * ]));
   *
   * Result:
   *
   * ["<h1>Angelina Jolie</h1><h2>80</h2>",
   * "<h1>Eric Jones</h1><h2>2</h2>",
   * "<h1>Paris Hilton</h1><h2>5</h2>",
   * "<h1>Kayne West</h1><h2>16</h2>",
   * "<h1>Bob Ziroll</h1><h2>100</h2>"]
   */
  
  function readyToPutInTheDOM(arr) {
    arr.forEach((key) => {
      document.write("<h1>" + key.name + "</h1>");
      document.write("<h2>" + key.age + "</h2>");
    });
    return arr;
  }
  readyToPutInTheDOM([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ]);
  
  /*
   * Exercise 5:
   * Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
   *
   * Test Cases:
   *   Test Case 1:  doubleValues([1,2,3])
   *   Test Case 2:  doubleValues([1,-2,-3])
   *
   * Result:
   * Test Case 1: [2,4,6]
   * Test Case 2: [2,-4,-6]
   */
  
  function doubleValues(double) {
      for (let i = 0; i < double.length; i++) {
        double[i] = double[i] * 2;
      }
      return double;
    }
    document.write(`${doubleNumbers([1,-2,-3])} <br>`);
  
  /*
   * Exercise 6:
  epts an array and returns a new array with each value multiplied by the index it is currently at in the array. * Write a function called valTimesIndex which acc
   *
   *
   * Test Cases :
   *   Test Case 1:  valTimesIndex([1,2,3])
   *   Test Case 2:  valTimesIndex([1,-2,-3])
   *
   * Result
   * Test Case 1: [0,2,6]
   * Test Case 2: [0,-2,-6]
   */
  
  function valTimesIndex(index) {
    for (let i = 0; i < index.length; i++) {
      index[i] = index[i] * i;
    }
  
    return index;
  }
  document.write(`${valTimesIndex([1,-2,-3])} <br>`)
  /*
   * Exercise 7:
   * Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value
   * of that key in each object.
   *
   * Test Case:
   * extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name')
   *
   * Result:
   * ['Elie', 'Tim', 'Matt', 'Colt']
   */
  
  /*
   * Exercise 8:
   * Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space.
   *
   * Examples:
   * extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
   */
  
  function extractFullName() {
    // your code here
  }