import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {

  const plass = () =>{
    dispatch({type:'plass'})
  }
  const minus = () =>{
    dispatch({type:'minus'})
  }
  const kill = () =>{
    dispatch({type:'kill'})
  }
  const dispatch = useDispatch()
  const count = useSelector(state=>state.counter)
  return (
    <div>
      <span>{count}</span>
      <br />
      <button onClick={plass}> +</button>
      <button onClick={minus}> -</button>
      <button onClick={kill}> resset</button>
    </div>
  )
}

export default App