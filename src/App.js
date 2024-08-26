
import { collection, getDocs } from 'firebase/firestore';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

import { projectFirestore,projectStorage,app } from './firebase/config';
import { useEffect, useState } from 'react';
import { list } from 'firebase/storage';

function App() {

  const db = projectFirestore
  const memRef = collection(db,"mems")

  const [listMem , setListMem] = useState([])
 


useEffect( () => {

  const getMemsList = async () =>{
    
    try{
      const data = await getDocs(memRef);
      console.log(data)
      const filtredData = data.docs.map( (doc) =>({
        ...doc.data() ,
        id: doc.id ,

      }))
      setListMem(filtredData)
    }catch(err){
      console.log(err)
    }
  }

  getMemsList()


} , [])

console.log(listMem)
  



  



  return (
    <div className="App">
      <Header ></Header>
      <Main></Main>
    </div>
  );
}

export default App;
