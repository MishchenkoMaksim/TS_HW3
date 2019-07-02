let res:any;

let sum = prompt().localeCompare(0);

class MyColl{

    private values:Array<any> = [];

    constructor(){
        this.values[0] = sum;
        this.values[1] = sum;
        this.values[2] = sum;
    }

    *getVal(){
        for(let i = 0; i < this.values.length; i++){
            console.log(typeof this.values[i]);

            yield this.values[i];
        }
    }

}

let iter = new MyColl().getVal();

res = '';

for (const item of iter){
    res+=item;
}

console.log(res);