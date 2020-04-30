

function toshu(str){
    //
    // var words = str.toLowerCase().split(" ");
    //
    //
    // for(var i=0; i< words.length; i++){
    //
    //
    //     words[i] = words[i][0].toUpperCase() + words[i].slice(1);


    return str.toLowerCase().split(" ").map(function (words) {return words[0].toUpperCase() + words.slice(1);

    })


}

console.log(toshu("I love you toshuda"))