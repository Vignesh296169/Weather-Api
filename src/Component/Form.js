import React,{useState} from 'react'
import styles from "./Form.module.css"
import Card from './Card/Card'


function Form(props) {
const[enteredtext,settext]=useState("")
const changehandler=(e)=>{
   settext(e.target.value)
}
  const preventHandler=(e)=>{
     e.preventDefault();
     const expen={
        title:enteredtext
     }
     props.onSave(expen.title);
     settext('')
    }
  return (
    <Card className={styles.toppier}>
      <form onSubmit={preventHandler}>
        
      <input value={enteredtext} onChange={changehandler} type="text" placeholder='City-Name'/>
      <br/>
      <button type="submit">Search</button>
      
      </form>
      
      </Card>
  )
}

export default Form