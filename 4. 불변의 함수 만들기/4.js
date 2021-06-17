function fn(person){
	person.name = 'lee';
}

function fn2(name){	// primitive version of fn
	name='lee';
}

function fn3(person){	// replicaction version of fn
	person = Object.assign({}, person);
	person.name = 'lee';
	return person;
}

var o1 = {name:'kim'};
fn(o1);
console.log(o1);

var o2 = 'kim';
fn2(o2);
console.log(o2);

o1 = {name:'kim'};
var o3 = fn3(o1);
console.log(o1, o3)

