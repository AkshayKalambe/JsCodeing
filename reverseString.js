//
// function reverseString(str) {
//
//     //we can not use reverse method on string so we convert it in array and split it
// var stringsArray= str.split("");
//
//     // We apply reverse function on array
// var reveseArray = stringsArray.reverse();
//
//     // convert array into string again
//
// var reverseString = reveseArray.join("");
//
// return reverseString
// }
// console.log(reverseString("Akshay"));
//
// function reverseString(str) {
//
//         return str.split("").reverse().join("");
// }
//
// console.log(reverseString("Akshay"))

function reverseString(str) {

    var final= "";


    for(var i =str.length -1; i>=0; i--){

        final += str[i];

    }
return final;
}
console.log(reverseString("aksahy"))