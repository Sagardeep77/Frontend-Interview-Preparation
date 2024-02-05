/*

    1. What is ES6? Difference b/w ES6/ES5.  Latest version of JS
    2. Let, const and var keywords 
    3. Hoisting in JS
    3. Arrow functions
    4. Multi-line strings
    5. Default parameters
    6. Template literals
    7. Destructuring assignment;
    8. Enhanced Object literals
    9. Export vs Exports
    10. Rest and spreat operators

*/

/*  
    =============================================================
    1. What is ES6? Difference b/w ES6/ES5.  Latest version of JS 
*/

// start-1
/* 
        ES6 stands for ECMAScript 6. ECMAScript is created to standardize javascript,
        and ES6 is the 6th version of JS published in 2015 also know as ECMAScript 2015.

        Some of the differences are

        ES5 published in 2009, Supports primitive data tyeps(string, boolean,number, null, undefined)
        "var" keyword to define variables, lower performance, functional approach to define classes

        ES6 published in 2015, new primitive data type introduced(symbol),
        this operator, classes, let, const keywords, arrow functions and many more 


        Latest version is ES14 => published in 2023

    */
//  end-1

/*  
    =============================================================
    2. What is ES6? Difference b/w ES6/ES5.  Latest version of JS 
*/

// start-2
/*
        var has functional scope
        let and const has block scope;
        It is mandatory to assign some value to const keyword in the declaration itself

        Must see : https://www.youtube.com/watch?v=Fnlnw8uY6jo&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=4&pp=iAQB
    */
{
  var a = 1;
  function print() {
    var b = 2;
    let c = 3;
    const d = 4;

    console.log(a); // 1
    console.log(b); // 2
    console.log(c); // 3
    console.log(d); // 4
  }
  print();
  console.log(a); // 1
  console.log(b); // undefined
  console.log(c);
  console.log(d);
}

//end-2
