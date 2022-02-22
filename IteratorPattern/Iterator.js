class Iterator {
    constructor(item){
        this.index = 0;
        this.item = item;
    }

    next(){
        return this.item[this.index++];
    }

    hasNext(){
        return this.index < this.item.length;
    }
}


const item = ['Master' , 2 , false , 0.5];

const iterator = new Iterator(item);

while(iterator.hasNext()){
    console.log(iterator.next());
}