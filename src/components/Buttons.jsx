import React from 'react'

export default function Buttons({setMode, setBreaken}) {
  return (
    <>
    <div className="container">
      <div className="button-group">
        <button className="custom-button" onClick={() => {setMode('editGraph'); setBreaken(false)}}>
          ✏️ Редактировать график
        </button>
        <button className="custom-button" onClick={() => {setMode('addBreak'); setBreaken(true)}}>
          ➕ Добавить перерыв
        </button>
      </div>
      </div>
      </>
  )
}
