class PupilsModel {
    constructor() {
        this._pupils = new Map();
        this.id = 0;
    }

    add({name, image, dateOfBirth, phones, sex, description = null}, setid = null) {
        this._validate(name.first, 'string', 'First name')
            ._validate(name.last, 'string', 'Last name')
            ._validate(image, 'string', 'Image')
            ._validate(dateOfBirth, 'string', 'Date of birth')
            ._validatedate(dateOfBirth, 'Date of birth')
            ._validate(phones[0].phone, 'string', 'Phone')
            ._validate(phones[0].primary, 'boolean', 'Primary')
            ._validate(sex, 'string', 'Gender')
            ._validategender(sex)

        if (setid != null) { //this is used when this method is called by update() (to not run into id numeration problem)
            this._pupils.set(setid + '', {name, image, dateOfBirth, phones, sex, description});
            return setid + '';
        }

        this.id++
        this._pupils.set(this.id + '', {name, image, dateOfBirth, phones, sex, description});
        return this.id + '';
    }

    _validate(key, type, arg) {
        if (typeof key !== type) {
            throw new Error(`${arg} is required and must be ${type}`);
        }
        return this
    }

    _validatedate(key, arg) {
        if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(key)) {
            throw new Error(`${arg} is not a date`);
        }
        return this
    }

    _validategender(key) {
        if (key != 'male' && key !='female') {
            throw new Error(`There are only two genders`);
        }
        return this
    }

    read(pupilId) {
        return console.log(this._pupils.get(pupilId));
    }

    update(pupilId, updProf) {
        if (this._pupils.get(pupilId) != undefined) {
            this._pupils.delete(pupilId);
            add(updProf, pupilId);
        }
    }

    remove(pupilId) {
        if (this._pupils.get(pupilId) != undefined) {
            this._pupils.delete(pupilId);
        }
    }
}