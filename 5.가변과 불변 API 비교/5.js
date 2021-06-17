var score = [1,2,3];
console.log("modify origin");
console.log("[Before] score: " + score);
score.push(4);
console.log("[After] score: " + score); 

var score = [1,2,3];
console.log("modify things of copy");
console.log("[Before] score " + score);
var score2 = score.concat(4);
console.log("[After] score:" + score + " score2: " + score2);

var score3 = [1,2,3];
console.log(score3);