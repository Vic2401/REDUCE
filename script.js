// #### survey

// 1. list favorite subjects with reduce
//    {
//    english: 1
//    history: 1
//    math: 3
//    }
// 2. assign to survey and log

const students = [
  { name: 'bob', favoriteSubject: 'english', id: 1, score: 100 },
  { name: 'peter', favoriteSubject: 'math', id: 2, score: 100 },
  { name: 'susy', favoriteSubject: 'math', id: 3, score: 100 },
  { name: 'anna', favoriteSubject: 'math', id: 4, score: 100 },
  { name: 'susy', favoriteSubject: 'history', id: 5, score: 100 },
];

const survey = students.reduce((surv, student) => {
  const favSub = student.favoriteSubject;
  if (surv[favSub]) {
    surv[favSub] = surv[favSub] + 1;
  } else {
    surv[favSub] = 1;
  }
  return surv;
}, {});

console.log(survey);

//-----------------------------------------------------
//-----------------------------------------------------
