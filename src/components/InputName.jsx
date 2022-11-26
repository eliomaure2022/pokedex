import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeName } from '../store/slices/userName.slice';
const InputName = () => {

  const [userName, setUserName] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const enterName = () => {
    dispatch(changeName(userName))
    navigate('/pokedex')
  }


  return (
    <div className='input-name'>
      <div className='title-input'>
        <h1>Hi Traineer</h1>
        <h2>Enter your Name</h2>
      </div>
      <input
        type="text"
        value={userName}
        onChange={e => setUserName(e.target.value)} />
      <button onClick={enterName}>enter</button>
    </div>
  );
};


export default InputName;