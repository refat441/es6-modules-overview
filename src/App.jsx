import { useState } from 'react'
import './App.css'
import Watch from './component/Watch/Watch'

function App() {
  const Watchs = [
    {id: 1, name:'apple warch', price:200 },
    {id: 2, name:'Samsung warch', price:300 },
    {id: 3, name:'nissan warch', price:400 },
  ]

  return (
    <>
      <h1>Vite + React</h1>
      {
        Watchs.map()
      }
    </>
  )
}

export default App
