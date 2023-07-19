import React from 'react'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { incNumber, decNumber } from "./action/index"

const App = () => {

  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch()
   
  return (
    <div className="container">
      <h1>Increment/Decrement Counter</h1>
      <h4>Using React and Redux</h4>

      <div className='quantity'>
        <a className='quantity_minus' onClick={() => dispatch(decNumber(1))}><span>-</span></a>
        <input type="text" value={myState} />
        <a className='quantity_plus' onClick={() => dispatch(incNumber(1))}><span>+</span></a>
      </div>
    </div>
  )
}

export default App