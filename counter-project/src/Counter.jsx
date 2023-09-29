import { useState } from "react";
import './Counter.css'

const Counter = () => {
    const[count,setCount] = useState(0);

    const x = () => setCount(count + 1)
    const y = () => setCount(count - 1)
  return (
   <>
   <div className="container">
    <h1 className="number">{count}</h1>
   </div>
   <section className="btn-container">
    <button  onClick={x} className="increemnet">+</button>
    <button onClick={y} className="increemnet">-</button>
   </section>

   </>
  )
}

export default Counter