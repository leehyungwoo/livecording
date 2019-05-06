var o1 = { name: 'kim', score: [1, 2] }

Object.freeze(o1);
o1.name = 'lee';
o1.city = 'seoul';
o1.score.push('가')
console.log(o1)


//해결법, 에러생성

var o1 = { name: 'kim', score: [1, 2] }

Object.freeze(o1);
Object.freeze(o1.score);
o1.name = 'lee';
o1.city = 'seoul';
o1.score.push('가')
console.log(o1)
