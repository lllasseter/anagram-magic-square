import Square from './Square';
import './Board.css';
import { useSelector } from 'react-redux';
import { getColumnTotals, getRowTotals } from '../helpers/helperFunctions';

function Board({ wordList }) {
  const showTotals = useSelector((state) => state.game.showTotals);
  const guesses = useSelector((state) => state.game.guesses);

  const rowTotals = getRowTotals(guesses);
  const columnTotals = getColumnTotals(guesses);
  
  return (
    <div className="Board">
      {wordList.length > 0 && (
        <>
          <div className={`${showTotals} column-totals`}>
            {columnTotals.map((total) => (
              <div className="Total">{total}</div>
            ))}
          </div>
          <div className="Row">
            <div className={`${showTotals} row-totals`}>
              {rowTotals.map((total) => (
                <div  className="Total">{total}</div>
              ))}
            </div>
            <div className="Squares">
              {wordList.map((wordData, index) => (
                <Square
                  wordData={wordData}
                  index={index}
                  key={`board-${index}`}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Board;
