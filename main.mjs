import { 
    SubjectsModel, 
    LMSModel, 
} from './school/index.mjs';
  
const history = new SubjectsModel({
    title: 'History',
    lessons: 24
});

// will return subjectId
history.id;

const lms = new LMSModel();
lms.remove(history);
lms.add(history);
lms.update(history);

// will return true or false. Answer will be true if we added this subject to lms
console.log(lms.verify(history));

// will return array of registered subjects
lms.readAll();
