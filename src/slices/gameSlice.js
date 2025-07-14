import { createSlice } from '@reduxjs/toolkit';

    const initialState = {
      guesses: [],
      answer: [],
      phrase: [],
    };

    export const gameSlice = createSlice({
      name: 'game',
      initialState,
      reducers: {
        setGuess: (state, { payload }) => {
            state.guesses[payload.index] = { number: payload.number, word: payload.word };
          },
        setAnswer(state, { payload }) {
            state.answer = payload.answer;
          },
        setPhrase(state, { payload }) {
            state.phrase = payload.phrase;
          },
        clearGuesses: state => {
            state.guesses = [];
          },
      },
    });

    export const { setGuess, setAnswer, setPhrase, clearGuesses } = gameSlice.actions;
    export default gameSlice.reducer;