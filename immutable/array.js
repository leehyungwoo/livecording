//원본을 바꾸는 방법
var score = [1, 2, 3];
score.push(4)

//원본을 바꾸지 않는 방법
var score2 = [1, 2, 3];
var score3 = score2.concat(4)

//push가 concat보다 빠르다,  concat은 복제가 들어가기때문에 성능적으로 느린편이다.