import React, { useState } from 'react'

const Child = ({storeData}) => {
    const [name,setName]=useState('')
    const [age,setage]=useState('')
    const [values,setValues]=useState('')

    const ClickEvent=()=>{
    const obj={
        name:name,
        age:age
    }
    storeData(obj)
    setName('')
    setage('')
    }
  
  return (
    <div>
      <input type="text"  value={name} onChange={(e)=>setName(e.target.value)}/>
      <input type="number"  value={age} onChange={(e)=>setage(e.target.value)}/>
      <button onClick={ClickEvent}>submit</button>
      
    </div>
  )
}

export default Child;