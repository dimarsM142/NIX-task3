class circleArray{
    constructor(){
        this.arr = [];
    }
    add(value){
        this.arr[this.arr.length] = value;
    }
    pop(){
        this.arr.pop();
    }
    remove(index){
        let newIndex;
        if(index >= 0){
            newIndex = index % this.arr.length;
        }
        else{
            if((index % this.arr.length) === 0){
                newIndex = 0;
            }
            else{
                newIndex = this.arr.length + (index % this.arr.length);
            }
        }
        this.arr.splice(newIndex, 1);
    }
    get(index){
        let newIndex;
        if(index >= 0){
            newIndex = index % this.arr.length;
        }
        else{
            if((index % this.arr.length) === 0){
                newIndex = 0;
            }
            else{
                newIndex = this.arr.length + (index % this.arr.length);
            }
        }
        return this.arr[newIndex];
    }
    show(startIndex = 0){
        let tempArr = [];
        for(let i = 0; i < this.arr.length; i++){
            tempArr.push(this.arr[i]);
        }
        for(let i = 0; i < this.arr.length; i++){
            tempArr.push(this.arr[i]);
        }
        let newStartIndex;
        if(startIndex >= 0){
            newStartIndex = startIndex % this.arr.length;
        }
        else{
            if((startIndex % this.arr.length) === 0){
                newStartIndex = 0;
            }
            else{
                newStartIndex = this.arr.length + (startIndex % this.arr.length);
            }
        }
        let resArr = [];
        for(let i = 0; i < this.arr.length; i++){
            resArr.push(tempArr[i + newStartIndex]);
            console.log(resArr[i]);
        }   
        return resArr;
    }
}

let circledArray = new circleArray();
circledArray.add("Київ");
circledArray.add("Харків");
circledArray.add("Херсон");
circledArray.add("Дунаївці");
console.log(circledArray.get(5) + '\n');
console.log(circledArray.get(-1) + '\n');
circledArray.show(5);
console.log();
circledArray.show(-1);
