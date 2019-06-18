class GroupsModel {
    constructor() {
        this._group = new Map();
        this.id = 0;
    }

    add(room) {
        this._group.set(room, []);
        this.id++;
        return this.id + '';
    }

    addpupil(groupId, pupilId) {
        
    }
}