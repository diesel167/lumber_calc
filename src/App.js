import React, { useState } from 'react';
import lumber1 from './img/lumber1.jpg';
import './App.css';
import Choose from './Components/Choose';
import Result from './Components/Result'

function App() {
  let [theme, setTheme] = useState('light');
  let [area, setArea] = useState(0);
  return (
    <div className={'App '+theme}>
      <header className="App-header">
        <h1>Калькулятор отделочного пиломатериала</h1>
        <label className="switch">
          <input type="checkbox" onChange={()=>{
            if(theme === 'light'){
              setTheme('dark');
            }
            else{
              setTheme('light');
            }
          }}/>
          <span className="slider round"/>
          <p>{theme + ' theme'}</p>
        </label>
        <div className="area-label">
          <p>Введите площадь вашей поверхности:</p>
          <input className="area-input" type="text" onChange={e=>{
            if(+e.target.value){
              setArea(+e.target.value);
            }
            else{
              setArea(0);
            }
          }}/>
        </div>
      </header>
      <Choose/>
      <Result/>
    </div>
  );
}

export default App;
