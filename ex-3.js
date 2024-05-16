// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore = Infinity;
// Start coding here

for (let i = 0; i < scores.length; i++) {
  if (minScore > scores[i]) {
    minScore = scores[i];
  }
}

console.log(minScore);
