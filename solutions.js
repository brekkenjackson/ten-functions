"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */


function isTrue() {
    if (true) {
        return true
    } else {
        return false
    }
}
console.log(isTrue());


function isFalse() {
    if (!true) {
        return true
    } else {
        return false
    }
}
console.log(isFalse());


function not(x) {
    return !x;
}
console.log(not());


function addOne(x){
    return ++x;
}
console.log(addOne(78));


function isEven(x){
    return x % 2 === 0;
}
console.log(isEven("6"));


function isIdentical(x, y){
    return (x === y);
}
console.log(isIdentical(33, 33));


function isEqual(x, y){
    return (x == y);
}
console.log(isEqual(33, "33"));


function or(x, y){
    return (x || y);
}
console.log(or(5, 7));


function and(x, y){
    return (x && y);
}
console.log(and(5, 7));


function concat(str1, str2){
    return ('' + str1 + str2); //string has to be at the beginning
}
console.log(concat("catch", 22 ));