import React, { useMemo, useState } from 'react'
import "./style.css"
const Memo = () => {
    const [counter, setCounter] = useState(0)

    const m18 = useMemo(()=>Edv(counter),[counter])
    
    function Edv(counter) {
        return (counter*0.18)/10;
    }
    function Counter() {
        setCounter(counter+1)
    }
    function getNight() {
        document.body.classList.toggle("zumrudunSehifesi")
    } 
  return (
    <div>
        <p>{counter}</p>
        <button onClick={Counter}>*</button>
        <button>{m18}</button>
        <button onClick={getNight}>getNight</button>

    </div>
  )
}

export default Memo