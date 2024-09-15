import React from 'react'
import {message} from 'antd'
export default function Buttons({setMode, setBreaken, rest}) {
  const breakButton = () =>{
    if (rest.length == 2){
      message.error('Удалите предыдущий перерыв');
      return;
    }
    else{
      setMode('addBreak'); 
      setBreaken(true)
    }
  }
  return (
    <>
    <div className="container">
      <div className="button-group">
        <button className="custom-button" onClick={() => {setMode('editGraph'); setBreaken(false)}}>
          ✏️ Редактировать график
        </button>
        <button className="custom-button" onClick={breakButton}>
          ➕ Добавить перерыв
        </button>
      </div>
      </div>
      </>
  )
}
