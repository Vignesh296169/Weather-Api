import React from 'react'
  


function Div(props) {
 
  return (<div>
    <div>{props.title}{props.title ? ":in Degree" :""}</div>
     {/* <span>{initial}</span> */}
    </div>
  )
}

export default Div