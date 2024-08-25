
import { collection, getDoc } from 'firebase/firestore';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

import { projectFirestore,projectStorage,app } from './firebase/config';

function App() {

  const db = projectFirestore
  const colRef = collection(db,'mems')

  //get data from firestore

  const docSnap =  getDoc(colRef)
  
  console.log(docSnap.data)



  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;
