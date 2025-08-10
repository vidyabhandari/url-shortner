import { useState } from 'react'
import appLogo from './assets/logo.svg';
import './App.css'

function App() {

  return (
    <div>
      <h2>URL Shortner</h2>
      <form>
        <input type="text" name="text" id="text" placeholder='Enter long URL'/>
        <button>Shorten</button>
      </form>
    </div>
  )
}

export default App
