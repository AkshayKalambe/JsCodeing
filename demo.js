function chunnky(arr,size) {
    var groups =[];

        while(arr.length>0){

            groups.push(arr.slice(0,size));
            arr = arr.slice(size);

        }
    return groups;

}

console.log(chunnky(["a","k","s","h","a","y"],2));