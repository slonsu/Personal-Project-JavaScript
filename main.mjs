import { 
    SubjectsModel, 
    LMSModel,
    TeachersModel,
    PupilsModel, 
    GroupsModel,
} from './school/index.mjs';
  
const history = new SubjectsModel({
    title: 'History',
    lessons: 24
});

history.id;

const lms = new LMSModel();
lms.remove(history);
lms.add(history);
console.log(lms.verify(history));
lms.readAll();

var data = {
    "name": {
      "first": "string",
      "last": "string"
    },
    "image": "string",
    "dateOfBirth": "00/00/0000", // format date
    "emails": [
      {
        "email": "string",
        "primary": true
      }
    ],
    "phones": [
      {
        "phone": "strindsg",
        "primary": true
      }
    ],
    "sex": "female", // male or female
    "subjects": [
      {
        "subject": "string"
      }
    ],
    "description": "string",
  }

const teachers = new TeachersModel();
const teacherId = teachers.add(data);
teachers.read(teacherId)
teachers.update(teacherId, updatedProfile)
teachers.remove(teacherId)

const pupils = new PupilsModel();
const pupilId = pupils.add(data);
pupils.read(pupilId)
pupil.update(pupilId, updatedProfile)
pupil.remove(pupilId)

const room = 236;
const groups = new GroupsModel();

const groupId = groups.add(room);
groups.removePupil(groupId, pupilId);
groups.addPupil(groupId, pupilId);
groups.update(groupId, {
  room: 237
});
groups.read(groupId);
