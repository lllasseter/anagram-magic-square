import { useState, useEffect } from 'react';
import { scrambleLetters } from '../helpers/helperFunctions';
import { setGuess } from '../slices/gameSlice';
import { useDispatch } from 'react-redux';
import './Square.css'

function Square({ wordData, index }) {
  const [number, setNumber] = useState(null);
  const [word, setWord] = useState(null);
  const [scrambledLetters, setScrambledLetters] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    setScrambledLetters(scrambleLetters(wordData.word));
  }, [wordData]); 

  return (
    <div className="Square">
      <div className="letters">
        {scrambledLetters}
      </div>
      <input
        className="number-input"
        type="text"
        onChange={value => setNumber(value.target.value)}
        onBlur={() => dispatch(setGuess({ index, number, word }))}
      />
      <input
        className="word-input"
        type="text"
        onChange={value => setWord(value.target.value)}
        onBlur={() => dispatch(setGuess({ index, number, word }))}
      />
    </div>
  )
}

export default Square;
