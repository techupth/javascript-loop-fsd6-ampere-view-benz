// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore = scores[0];
// Start coding here
for (let item = 1; item < scores.length; item += 1) {
  if (scores[item] < minScore) {
    minScore = scores[item];
  }
}
console.log(minScore);
