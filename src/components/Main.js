import React, { useState } from 'react'

function Main() {

  const [title , setTitle] = useState('')
  const [fileImg , setFileImg] = useState('');
  const [descript , setDescript] = useState('')

  const [confirm , setConfirm] = useState(false)

  console.log(title)

  const createMame = () => {

  }


  return (
    <div className='main-container'>
        <div className='inputs'>
            <input type='text' placeholder='tekst główny' onChange={ (e) => setTitle(e.target.value)}></input>
            <input type="file" placeholder='dodaj zdjecie'></input>
            <input type='text' placeholder='opis' onChange={ (e) => setDescript(e.target.value)}></input>
            <button onClick={createMame}>Create mame</button>
        </div>
    </div>
  )
}

export default Main