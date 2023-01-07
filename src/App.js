import './App.css';
import Form from './Component/Form';
import Api from './Api';
import { useState } from 'react';
import Div from './Component/Div';
function App() {
  const[init,setinit]=useState('')
  const saveHandler=async(signal)=>{
      const rest=await Api(signal)
        setinit(rest);
  }

  return (
    <div className="App">
        
        <Form onSave={saveHandler}/>
        < div className='last'>
        <Div  title={init}/></div>
        <h6>-Vignesh</h6>
    </div>
  );
}

export default App;
