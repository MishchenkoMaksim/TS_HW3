let res = '';
class MyColl {
    constructor() {
        this.values = [];
        for (let i = 0; i < 3; i++) {
            let ask = prompt('value?');
            this.values[i] = ask;
        }
    }
    *getVal() {
        for (let i = 0; i < this.values.length; i++) {
            yield this.values[i] + ' ';
        }
    }
}
let iter = new MyColl().getVal();
res = '';
for (const item of iter) {
    res += item;
}
console.log(res);
//# sourceMappingURL=app.js.map