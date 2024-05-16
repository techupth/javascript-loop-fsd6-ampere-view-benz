// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;
// Start coding here
minScore = scores[0]; // กำหนดเอาคนที่ หนึ่ง เทียบกับคนอื่นเรื่อยๆ
for (let i = 0; i < scores.length; i++) {
  if (scores[i] <= minScore) {
    minScore = scores[i];
  }
}

console.log(minScore);

// minScore = scores;
// console.log(Math.min(...minScore)); ลองดู
