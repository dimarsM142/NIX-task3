function checkString(string, START = 0, FINISH = string.length){
    let counterOfSquareStart = 0;
    let counterOfSquareEnd = 0;
    let counterOfRoundStart = 0;
    let counterOfRoundEnd = 0;
    for(let i = 0; i < string.length; i++){
        if(string[i] === '('){
            counterOfRoundStart++;
        }
        if(string[i] === ')'){
            counterOfRoundEnd++;
        }
        if(string[i] === '['){
            counterOfSquareStart++;
        }
        if(string[i] === ']'){
            counterOfSquareEnd++;
        }
    }
    if(counterOfRoundStart !== counterOfRoundEnd){
        return false;
    }
    if(counterOfSquareStart !== counterOfSquareEnd){
        return false;
    }
    if(counterOfSquareStart === 0 && counterOfSquareEnd === 0 && counterOfRoundEnd === 0 && counterOfRoundStart === 0){
        return true;
    }

    for (let j = 0; j < counterOfRoundStart + counterOfSquareStart; j++){
        let IndexLastStart = string.lastIndexOf('(') > string.lastIndexOf('[') ? string.lastIndexOf('(') : string.lastIndexOf('[');
        let typeLastStart = string[IndexLastStart] === '(' ? 1 : 2;
        let IndexFirstFinish;
        if(typeLastStart === 1){
            IndexFirstFinish = string.indexOf(')', IndexLastStart);
            if(IndexFirstFinish === -1){
                return false;
            }
            if(IndexFirstFinish < IndexLastStart) {
                return false;
            };
            for(let i = IndexLastStart + 1; i < IndexFirstFinish; i++){
                if(string[i] === ']'){
                    return false;
                }
            }
            string = string.slice(0, IndexLastStart) + string.slice(IndexFirstFinish + 1, string.length);   //ВИДАЛЕННЯ ЕЛЕМЕНТІВ ІЗ РЯДКА
        }
        if(typeLastStart === 2){
            IndexFirstFinish = string.indexOf(']', IndexLastStart);
            if(IndexFirstFinish === -1){
                return false;
            }
            if(IndexFirstFinish < IndexLastStart) {
                return false;

            };
            for(let i = IndexLastStart + 1; i < IndexFirstFinish; i++){
                if(string[i] === ')'){
                    return false;
                }
            }
            string = string.slice(0, IndexLastStart) + string.slice(IndexFirstFinish + 1, string.length);   //ВИДАЛЕННЯ ЕЛЕМЕНТІВ ІЗ РЯДКА
        }
    }
    return true;
   
}


console.log(checkString("[text][](sos)string(text[adsad]text)asdasd[text]"));
console.log(checkString("NoBrackets"));
console.log(checkString("one(Brackets)asd"));
console.log(checkString("onebad)(Bracketsasd"));
console.log(checkString("onebad[)(]Bracketsasd"));
console.log(checkString("[()]   []([])hard([syvstc]ts(crs))cs"));

console.log(checkString("isu([syvstc]ts(crs))cs"));
console.log(checkString("isu[syv(stc]ts(crs))cs"));