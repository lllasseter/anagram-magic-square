import './App.css'
import Board from './components/Board'
import { generateWordList } from './helpers/helperFunctions';
import Clues from './components/Clues';
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer, setPhrase, clearGuesses } from './slices/gameSlice';
import { phrases } from './helpers/wordLists';
import Phrase from './components/Phrase';
import Toggle from './components/Toggle';

function App() {
  const dispatch = useDispatch();
  const wordList = useSelector((state) => state.game.answer);

  return (
    <>
      <div className="Card">
        <div className="Buttons" >
          <button className="Button" onClick={() => {
            let answer = [];
            let phraseAsCharList = []; 
            if (wordList.length == 0) {
              const phrase = phrases[Math.floor(Math.random() * (phrases.length))];
              phraseAsCharList = phrase.replace(/\s/g, '').split('')
              answer = generateWordList(phraseAsCharList);
            }
            dispatch(clearGuesses());
            dispatch(setPhrase({ phrase: phraseAsCharList}));
            dispatch(setAnswer({ answer }));
          }}>
            {`${wordList.length > 0 ? 'Reset' : 'New puzzle'}`}
          </button>
          <button className="Button" onClick={() => {}}>
            Check (TODO)
          </button>
          <Toggle />
        </div> 
        <div className="Left">
          <Board wordList={wordList} />
        </div>
        <Clues wordList={wordList} />
      </div>
      <Phrase />
    </>
  )
}

export default App
