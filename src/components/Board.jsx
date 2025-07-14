import Square from './Square';
import './Board.css';

function Board({ wordList }) {
  return (
    <div className="Board">
      {wordList.map((wordData, index) => (
        <Square
          wordData={wordData}
          index={index}
          key={`board-${index}`}
        />
      ))}
    </div>
  )
}

export default Board;
