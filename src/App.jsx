import { useState } from 'react'
import './App.css'
import Board from './components/Board'
import { generateWordList } from './helpers/helperFunctions';
import Clues from './components/Clues';

function App() {
  const [wordList, setWordList] = useState([]);

  return (
    <>
      <div className="card">
        <button onClick={() => setWordList(generateWordList())}>
          New puzzle
        </button>
        <Board wordList={wordList} />
        <Clues wordList={wordList} />
      </div>
    </>
  )
}

export default App
