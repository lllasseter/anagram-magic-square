import './Clues.css';

function Clues({ wordList }) {
  const sortedList = wordList.sort((a, b) => a.number - b.number);
  return (
    <div className="Clues">
      {sortedList.map(wordData => (
        <div className="Clue">
          {`${wordData.number}: ${wordData.clue}`}
        </div>
      ))}
    </div>
  )
}

export default Clues;
