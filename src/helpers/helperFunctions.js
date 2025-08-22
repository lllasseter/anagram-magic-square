import { availableWords } from "./wordLists";
import { propEq, find, pluck, uniq } from 'ramda';

export function scrambleLetters(word) {
    const originalWord = word;
    word = word.split('');

    //Shuffle the letters
    for (let i = word.length + 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [word[i], word[j]] = [word[j], word[i]];
    }

    let shuffledWord = word.join("");

    // reshuffle if same word is returned
    if (shuffledWord === originalWord) {
        return scrambleLetters(shuffledWord)
    }

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
    const numberGrid = magicSquares[Math.floor(Math.random() * (magicSquares.length))];
    const answers = numberGrid.map(number => getRandomWord(number, phrase[number - 1]));

    // if any word is repeated, easier to just regenerate the whole thing
    if (uniq(pluck('word', answers)).length < 25) {
        return generateWordList(phrase)
    }

    return answers;
}

export function getPhraseLetter(index, guesses) {
    const guess = find(propEq((index + 1).toString(), 'number'), guesses);
    if (!guess || !guess.word) return null;
    return guess.word.charAt(0);
}

const magicSquares = [
    [17, 24, 1, 8, 15, 23, 5, 7, 14, 16, 4, 6, 13, 20, 22, 10, 12, 19, 21, 3, 11, 18, 25, 2, 9],
    [1, 2, 13, 24, 25, 3, 22, 19, 6, 15, 23, 16, 10, 11, 5, 21, 7, 9, 20, 8, 17, 18, 14, 4, 12],
    [18, 16, 11, 1, 19, 17, 10, 22, 14, 2, 6, 23, 3, 25, 8, 4, 9, 24, 13, 15, 20, 7, 5, 12, 21],
    [1, 8, 15, 17, 24, 9, 11, 18, 25, 2, 12, 19, 21, 3, 10, 20, 22, 4, 6, 13, 23, 5, 7, 14, 16],
    [18, 25, 2, 9, 11, 4, 6, 13, 20, 22, 15, 17, 24, 1, 8, 21, 3, 10, 12, 19, 7, 14, 16, 23, 5],
    [17, 23, 4, 10, 11, 24, 5, 6, 12, 18, 1, 7, 13, 19, 25, 8, 14, 20, 21, 2, 15, 16, 22, 3, 9],
]
