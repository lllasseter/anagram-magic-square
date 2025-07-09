import { availableWords, testPhrases } from "./wordLists";

export function scrambleLetters(word) {
    word = word.split('');

    //Shuffle the letters
    for (let i = word.length + 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [word[i], word[j]] = [word[j], word[i]];
    }

    //Append and return
    return word.join("");
}

export function getRandomWord(number, letter) {
    const wordList = availableWords[letter];

    const row = Math.floor(Math.random() * (wordList.length));
    const word = wordList[row].word
    const clue = wordList[row].definitions[Math.floor(Math.random() * (wordList[row].definitions.length))];
    return { word, clue, number }
}

export function generateWordList() {
    // TODO - generate random grid where rows and columns add up to 65
    const numberGrid = [17, 24, 1, 8, 15, 23, 5, 7, 14, 16, 4, 6, 13, 20, 22, 10, 12, 19, 21, 3, 11, 18, 25, 2, 9];

    const phrase = testPhrases[Math.floor(Math.random() * (testPhrases.length))];
    const phraseAsCharList = phrase.replace(/\s/g, '').split('')
    return numberGrid.map(number => getRandomWord(number, phraseAsCharList[number - 1]));
}
