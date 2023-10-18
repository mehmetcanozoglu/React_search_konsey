import React, { useState } from 'react'
import './App.css';
import Data from './Data.json'

function App() {
  let [searchterm, setSearchterm] = useState("")

  return (
    <div className="container">
      <h1>Kurtlar vadisi konsey</h1>
      <div className='inputContainer'>
        <input className='search' type='text'
          placeholder='konsey üyesinin adını giriniz'
          onChange={(e) => setSearchterm(e.target.value)} />
      </div>
      <div className='dataContainer'>
        {Data.filter((val) => {
          if(searchterm == ""){
            return val;
          }else if (val.title.toLocaleLowerCase().includes(searchterm.toLocaleLowerCase())){
                return val;
          }}).map((val) =>{
          return (
            <div className='data' key={val.id}>
              <img src={val.image}></img>
              <h2>{val.title}</h2>
              <p>{val.Description}</p>
            </div>
          )})}
      </div>
    </div>
  )}

export default App;
