import { useSelector } from 'react-redux';
import { any, propEq } from 'ramda';
import './Clues.css';
import check from '../helpers/check.svg';

function Clues({ wordList }) {
  const sortedList = wordList.slice().sort((a, b) => a.number - b.number);
  const guesses = useSelector((state) => state.game.guesses);

  return (
    <div className="Clues">
      {sortedList.map(wordData => (
        <div className="Clue" key={`clue-${wordData.number}`}>
          {any(propEq(wordData.number.toString(), 'number'), guesses) && (
            <span><img src={check} /></span>
          )}
          {`${wordData.number}: ${wordData.clue}`}
        </div>
      ))}
    </div>
  )
}

export default Clues;
