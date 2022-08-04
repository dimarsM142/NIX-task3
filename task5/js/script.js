function substrCount(input, needle, offset = 0, length = input.length - offset){
    if(offset < 0){
        offset = 0;
    }
    if(offset > input.length - needle.length){
        //return undefined;
        offset = input.length - needle.length;
    }
    if(length < 1){
        //return undefined;
        length = 1;
    }
    if(length > input.length - offset){
        length = input.length - offset;
    }
    let counter = 0;
    for(let i = offset; i < offset + length - 1; i++){
        if(needle === input.slice(i, i + needle.length)){
            counter++;
        }
    }

    return counter;
}


console.log(substrCount("eefcdefefghefsad", "ef", 2, 10));
console.log(substrCount('Good Golly Miss Molly', 'll', 7, 10));