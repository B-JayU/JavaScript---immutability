var o1 = {name:'kim', score:[1,2]};
Object.freeze(o1);
o1.name = 'lee'; // �ݿ��ȵ� -> primitive property�� ���� ���� ����ȵ�.
o1.city = 'seoul'; // �ݿ��ȵ� -> ��ü�� ���ο� property �߰��ȵ�.
o1.score.push(3); // �ݿ��� why? -> ��ü o1�� score ��ü�� ���� ������ �һ� �����Ϳ� ���� freeze ������ ���� ���� �ƴ�.
console.log(o1);

