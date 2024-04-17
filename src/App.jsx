import { useState } from 'react'
import avatarImg from '/public/AvatarLogo.jpg'

import './App.css'
import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="Profile">
        <div className="ImgAndTextCard">
          <img
            className="Avatar"
            src={avatarImg}
          />

          <p className="FullName">Наумов Никита</p>

        </div>


        <div className="SkillsBlock">
          <p className="SkList">Список навыков</p>


          <div className="Skill">
            <p className="CPP">C++</p>
            <p className="LevelBasic">Basic</p>
          </div>

          <div className="Skill">
            <p className="CSharp">C#</p>
            <p className="LevelBasic">Basic</p>
          </div>

          <div className="Skill">
            <p className="Python">Python</p>
            <p className="LevelBasic">Basic</p>
          </div>

          <div className="Skill">
            <p className="Figma">Figma</p>
            <p className="LevelBasic">Basic</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default App

/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
     
      <h1>Vite + React</h1>
      <div className="card" >
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more

      </p> */