// import {useState} from 'react';
import React from "react";
function App() {
  const uploadImage = (files) => {
    console.log(files[0])
  }
  
  return (
    <div className="App">
      
      <input type="file"
       onChange={(event)=>{uploadImage(event.target.files)}} 
       />
      
     
    </div>
  );
}
  
export default App;