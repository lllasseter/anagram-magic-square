import { scrambleLetters } from '../helpers/helperFunctions';
import './Square.css'

function Square({ wordData }) {
  return (
    <div className="Square">
      <div className="letters">
        {scrambleLetters(wordData.word)}
      </div>
      <input
        className="number-input"
        type="text"
      />
      <input
        className="word-input"
        type="text"
      />
    </div>
  )
}

export default Square;
