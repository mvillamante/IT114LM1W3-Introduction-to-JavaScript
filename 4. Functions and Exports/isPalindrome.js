// DONE Create a funciton called isPalindrome function which checks if the given word is a palindrome
// What is a Palindrome? See here: https://en.wikipedia.org/wiki/Palindrome. Feel free to search for the implementation


function isPalindrome(word) {

    const cleanWord= word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanWord === cleanWord.split('').reverse().join('');
}

// DONE Set the isPalindrome function as the default export of the module
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
module.exports = isPalindrome;