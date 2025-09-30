import { useDispatch } from 'react-redux';
import './Toggle.css';
import { useState } from 'react';
import { setShowTotals } from '../slices/gameSlice';

function Toggle() {
  const [selectedOption, setSelectedOption] = useState('off');
  const dispatch = useDispatch();

  return (
    <div className="Toggle" onChange={(e) => {
      console.log(e.target.value);
      setSelectedOption(e.target.value);
      dispatch(setShowTotals({ showTotals: e.target.value }))
    }}>
      Show Totals:
      <label>
        <input
          type="radio"
          name="myRadioGroup"
          value="on"
          checked={selectedOption === 'on'}
        />
        On
      </label>
      <label>
        <input
          type="radio"
          name="myRadioGroup"
          value="off"
          checked={selectedOption === 'off'}
        />
        Off
      </label>
    </div>
  )
}

export default Toggle;
