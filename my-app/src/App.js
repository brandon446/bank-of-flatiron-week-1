import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Components/Header';
import Form from './Components/Form';
import Table from './Components/Table';
import Search from './Components/Search';

function App() {

 const [list, setList] = useState([])
 const [input, setInput] = useState('')

 useEffect(function(){
  fetch("  http://localhost:3001/transactions?q=" + input)
  .then(response => response.json())
      .then(data => setList(data))

      
},[input])



function handleSearch(e){
  
  setInput(e.target.value)
}

  return (
    <div className="App">
      
     <Header />
     < Search handleSearch = {handleSearch}/>
     <Form list = {list}  setList = {setList} />
     <Table list = {list}  />
    </div>
  );
}

export default App;