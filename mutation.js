function mutation(arr){
    var firstLetter = arr[0].toLowerCase()
    var secondWord= arr[1].toLowerCase();

    for(var i =0 ; i < secondWord.length ; i++) {
        if(firstLetter.indexOf(secondWord[i])=== -1) return false;

            }

    return true



}

console.log( mutation(["Akshay","hy"]))