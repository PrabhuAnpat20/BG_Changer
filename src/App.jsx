import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className=" h-screen w-screen " style={{backgroundColor : color}}></div>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-2 rounded-xl text-cyan-950'>
          <button className='px-4' style={{backgroundColor: "red"}} onClick={()=>setColor("red")}>Red</button>
          <button className='px-4' style={{backgroundColor: "green"}} onClick={()=>setColor("green")}>green</button>
          <button className='px-4' style={{backgroundColor: "blue"}} onClick={()=>setColor("blue")}>blue</button>
          <button className='px-4' style={{backgroundColor: "yellow"}} onClick={()=>setColor("yellow")}>yellow</button>
          <button className='px-4' style={{backgroundColor: "orange"}} onClick={()=>setColor("orange")}>orange</button>
          <button className='px-4' style={{backgroundColor: "purple"}} onClick={()=>setColor("purple")}>purple</button>
        </div>
      </div>
    </>
  )
}

export default App
