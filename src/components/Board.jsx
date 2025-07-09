import Square from './Square';
import './Board.css';

function Board({ wordList }) {
  return (
    <div className="Board">
      {wordList.map(wordData => (
        <Square
          wordData={wordData}
        />
      ))}
    </div>
  )
}

export default Board;
