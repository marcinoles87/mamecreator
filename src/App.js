
import { collection, getDoc } from 'firebase/firestore';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

import { projectFirestore,projectStorage,app } from './firebase/config';

function App() {

  const db = projectFirestore
  const colRef = collection(db,"mems")



  //get data from firestore

  const getData = async () => {

      const docSnap = await getDoc(collection(db,"mems"));
      const data = []
      
      docSnap.forEach( (doc) => {
        data.push(doc.data())
      })
        
        console.log(data)
  }

  

getData()

  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;
