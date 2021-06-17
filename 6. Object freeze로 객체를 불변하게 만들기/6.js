var o1 = {name:'kim', score:[1,2]};
Object.freeze(o1);
o1.name = 'lee'; // 반영안됨 -> primitive property에 대한 변경 적용안됨.
o1.city = 'seoul'; // 반영안됨 -> 객체에 새로운 property 추가안됨.
o1.score.push(3); // 반영됨 why? -> 객체 o1은 score 객체에 대한 참조만 할뿐 데이터에 대한 freeze 권한을 갖는 것은 아님.
console.log(o1);

