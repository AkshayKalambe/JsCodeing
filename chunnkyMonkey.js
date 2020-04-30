
function chunkyMonkey(arr,size){
    var groups=[];
    while(arr.length >0){
        groups.push(arr.slice(0,size));
        arr= arr.slice(size);
    }
    return groups;


}

console.log(chunkyMonkey(["s","d","e","f","g"],3));