// 1. Reverse a String Without Using reverse()
const str = "JavaScript";

let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}

console.log("Reversed String:", reversed);




// 2. Count Number of Vowels in a String
const text = "JavaScript Programming";

let vowelCount = 0;

const vowels = "aeiouAEIOU";

for (const char of text) {

    if (vowels.includes(char)) {
        vowelCount++;
    }
}

console.log("\nNumber of Vowels:", vowelCount);



// 3. Check Whether a String is Palindrome
const word = "madam";

let reversedWord = "";

for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
}

const isPalindrome = word === reversedWord;

console.log(
    `\n${word} is ${
        isPalindrome ? "a Palindrome" : "Not a Palindrome"
    }`
);




// 4. Capitalize First Letter of Every Word
const sentence = "javascript is powerful";

const capitalizedSentence = sentence
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");

console.log("\nCapitalized Sentence:");
console.log(capitalizedSentence);


// 5. Find Longest Word in a Sentence
const line = "JavaScript is a powerful programming language";

const words = line.split(" ");

let longestWord = "";

for (const word of words) {

    if (word.length > longestWord.length) {
        longestWord = word;
    }
}

console.log("\nLongest Word:", longestWord);
