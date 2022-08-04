function isEven(arg){
    if(!Number.isInteger(arg)){
        return undefined;
    }
    if(arg & 1){
        return false;
    }
    else{
        return true;
    }
}
console.log(isEven(-12));
console.log(isEven(-13));
console.log(isEven(12));
console.log(isEven(13));