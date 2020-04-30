function pallendrom(srt) {

    var check = srt.split("").join("")
    console.log(check);
    var result = srt.split("").reverse().join("");
    console.log(result);


    if (result === check) {

        console.log("true");

    } else{

        console.log("false");
    }



    }



pallendrom("mom");