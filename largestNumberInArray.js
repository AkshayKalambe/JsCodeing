
function largest(arr) {

    var maxes = [];

    for(var i=0; i<arr.length;i++){
        var tempMAx= arr[i][0];
       // console.log(tempMAx)
        for(var j=0; j< arr[i].length; j++) {

            var currentEle = arr[i][j];
            if (currentEle >= tempMAx){
                tempMAx = currentEle;

        }
    }

maxes.push(tempMAx);
}
return maxes;
    //console.log(max)

}


console.log(largest([[1,2,3,4],[11,33,12,14],[111,101,102,103,],[1111,2222,4444,3333]]));