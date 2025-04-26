import React from 'react'
import { FaRegGem } from "react-icons/fa6";
import { BsPersonCirle } from "react-icons/bs"
import './App.css'

function App() {
 

  return (
    <>
     <header className="header">
      <button className="menu-button"><BsPersonCirle/></button>
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__item">
            <FaRegGem/>
            <span>Каблучки</span>
            </li>
          <li className="menu__item">
            <FaRegGem/>
            <span>Каблучки</span>
            </li>
          <li className="menu__item">
            <FaRegGem/>
            <span>Каблучки</span>
            </li>
          <li className="menu__item">
            <FaRegGem/>
            <span>Каблучки</span>
            </li>
          <li className="menu__item">
            <FaRegGem/>
            <span>Каблучки</span>
            </li>
          <li className="menu__item">
            <FaRegGem/>
            <span>Каблучки</span>
            </li>
        </ul>
      </nav>
     </header>
    </>
  )
}

export default App
