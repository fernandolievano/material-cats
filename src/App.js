import React from 'react'
import catIcon from './img/cat.svg'
import codeIcon from './img/code.svg'
import './App.scss'

// components
import CatsList from './components/CatsList'

function App() {
  return (
    <div className='wrapper'>
      <header className='bar'>
        <img src={catIcon} height="30px" loading="eager" alt="Icon made by Freepik"/>
      </header>
      <main className='container'>
        <header className='container-title'>
          <h1 className='heading'>Enjoy this awesome cats!</h1>
        </header>
        <CatsList />
      </main>
      <footer className="footer">
        <h6>
          <img src={codeIcon} height="20px" loading="lazy" /> by <a href="https://github.com/fernandolievano" target="_blank" rel="noopener noreferrer">Fernando Liévano</a>
        </h6>
      </footer>
    </div>
  )
}

export default App
