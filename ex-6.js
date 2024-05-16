// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
function reverseString(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    reversedCompanyName += str[i];
  }
  return reversedCompanyName;
}

let reversedString = reverseString(companyName);
console.log(reversedString);
