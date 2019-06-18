export class SubjectsModel {
    constructor({title, lessons, description = null}) {
        this._validate(title, 'string', 'Title')
        ._validate(lessons, 'number', 'Title');
        this.obj = {};
        this.obj.title = title;
        this.obj.lessons = lessons;
        if (description !== null) {
            this.obj.description = description;
        }
        this.id = '1';
    }

    _validate(key, type, arg) {
        if (typeof key !== type) {
            throw new Error(`${arg} is required and must be ${arg}`);
        }
        return this
    }
}
