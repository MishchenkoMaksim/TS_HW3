let res = '';

class MyColl{
    public values: string[] = [];

    constructor() {
        for(let i = 0; i < 3; i++){
            let ask = prompt('value?');
            this.values[i] = ask;
        }
    }

    public *getVal(){
        for(let i = 0; i < this.values.length; i++){
            yield this.values[i] + ' ';
        }
    }
}

let iter = new MyColl().getVal();

res = '';

for (const item of iter){
    res+=item;
}

console.log(res);