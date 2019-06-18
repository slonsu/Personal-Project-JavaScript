export class LMSModel {
    constructor() {
        this._hist = new Map();
    }
  
    remove(subj) {
        for (let item of this._hist) {
            if (item[0] === subj.id) {
                this._hist.delete(subj.id);
            }
        }
    }
  
    add(subj) {
        let id = subj.id;
        delete subj.obj.id;
        console.log(this._hist.set(id, subj.obj));
    }
  
    update(subj) {
        for (let item of this._hist) {
            if (item[0] === subj.id) {
                this._hist.set(subj.id, subj.obj);
            }
        }
    }
  
    verify(subj) {
        for (let item of this._hist) {
            if (item[1] == subj.obj) {
                return true;
            }
        }
        return false;
    }
  
    readAll() {
        var returnarray = [];

        for (let item of this._hist) {
            returnarray.push(item);
        }
        return console.log(returnarray);
    }
  }