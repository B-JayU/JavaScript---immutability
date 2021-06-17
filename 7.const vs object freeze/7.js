const o1 = {name:'kim'}
Object.freeze(o1);
const o2 = {name:'lee'}
// o1 = o2; -> TypeError: Assignment to constant variable.
o1.name = 'park'; // failure -> o1 is freezed
console.log(o1);
