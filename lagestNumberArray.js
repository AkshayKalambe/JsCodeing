//
// function largestOfArr(arr) {
//     var maxx= [];
//     var tempmax = arr[i][0];
//     for(var i=0;i<arr.length;i++){
//         for(var j=0; j <arr[i].length  ; j++ ){
//
//             var current = arr[i][j]
//
//             if(current > tempmax) {
//
//             }
//
//             console.log(arr[i][j]);
//
//         }
//
//
//
//     }
//
// }
//
//
// largestOfArr([[4,5,6,7],[12,123,456,765],[12,3455,6786,9876],[11111,33,3,222]]);


// function array(arr){
//     var maxx= [];
//     var temp = arr[i][0];
//     for(var i=0; i< arr.length ; i++){
//         for( var j=0 ; j< arr[i].length;j++){
//             var current = arr[i][j]
//             if (current > temp);
//
//         }
//     }
//
// }
// array([[1,2,3],[22,11,33],[111,222,333]])




function palindrome(str) {

    var con = str.split("").reverse.join("");

    if(con === str )return true;
    return false;

}
palindrome("eye");
