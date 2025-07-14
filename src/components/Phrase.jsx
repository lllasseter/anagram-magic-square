import { useSelector } from 'react-redux';
import './Phrase.css';
import { getPhraseLetter } from '../helpers/helperFunctions';

function Phrase() {
  const guesses = useSelector((state) => state.game.guesses);
  const phrase = useSelector((state) => state.game.phrase);

  return (
    <div className="Phrase">
      {phrase.map((letter, index) => (
        <div className="Letterbox" key={`letter-${index}`}>
          <div className="Letter">
            {getPhraseLetter(index, guesses)}
          </div>
          <div className="Number">
            {index + 1}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Phrase;
