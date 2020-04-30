function truncate(str, num){

    if(num > str.length)return "";

    return str.slice(0,num)+ "...";

}
console.log(truncate("A man with a golden heart", 5));