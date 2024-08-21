import React, { useState } from 'react'

function Main() {

  const [title , setTitle] = useState('')
  const [fileImg , setFileImg] = useState('');
  const [descript , setDescript] = useState('')

  const [confirm , setConfirm] = useState(false)

  console.log(title,descript,fileImg)

  const handleUploadFile = (e) =>{
    console.log(e.target.files)
    setFileImg(URL.createObjectURL(e.target.files[0]))
  }

  const createMame = () => {
    setConfirm(!confirm)
  }


  return (
    <div className='main-container'>
        <div className='inputs'>
            <input type='text' placeholder='tekst główny' onChange={ (e) => setTitle(e.target.value)}></input>
            <input type="file" placeholder='dodaj zdjecie' onChange={handleUploadFile}></input>
            <input type='text' placeholder='opis' onChange={ (e) => setDescript(e.target.value)}></input>
            <button onClick={createMame}>Create mame</button>
        </div>

        {confirm ? 
        <div className='mem-container'>
          <h1>{title}</h1>
          <img src={fileImg} alt={title}></img>
          <p>{descript}</p>
        </div>
         : ''}
        
    </div>
  )
}

export default Main