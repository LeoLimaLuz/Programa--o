// function scope
let subject = 'create video';

function createThink(subject) {
  subject = 'study';
}

console.log(subject);
createThink();
console.log(subject);
