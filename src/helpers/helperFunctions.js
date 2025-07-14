import { availableWords } from "./wordLists";
import { propEq, find } from 'ramda';

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

export function generateWordList(phrase) {
    // TODO - generate random grid where rows and columns add up to 65
    const numberGrid = [17, 24, 1, 8, 15, 23, 5, 7, 14, 16, 4, 6, 13, 20, 22, 10, 12, 19, 21, 3, 11, 18, 25, 2, 9];

    return numberGrid.map(number => getRandomWord(number, phrase[number - 1]));
}

export function getPhraseLetter(index, guesses) {
    const guess = find(propEq((index + 1).toString(), 'number'), guesses);
    console.log(guess);
    if (!guess || !guess.word) return null;
    return guess.word.charAt(0);
}
