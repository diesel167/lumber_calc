import React, { useState } from 'react';
import './App.css';
import Choose from './Components/Choose';
import Result from './Components/Result';
import Footer from './Components/Footer';

function App() {
  let [theme, setTheme] = useState('light');
  let [area, setArea] = useState(0);
  let [allwidth, setAllwidth] = useState(0);
  let [workwidth, setWorkwidth] = useState(0);
  return (
    <div className={'App '+theme}>
      <header className="App-header">
        <div className="head">
          <h1>Калькулятор отделочного пиломатериала</h1>
          <label className="switch">
            <input type="checkbox"
                   onChange={()=>{
                     if(theme === 'light'){
                       setTheme('dark');
                     }
                     else{
                       setTheme('light');
                     }
                   }}/>
            <span className="slider round"/>
            <p className='theme'>{theme + ' theme'}</p>
          </label>
        </div>
        <div className="area-label">
          <p>Введите площадь вашей поверхности:</p>
          <input className="area-input"
                 placeholder='0'
                 type="text"
                 onChange={e=>{
                   if(+e.target.value){
                     setArea(+e.target.value);
                   }
                   else{
                     setArea(0);
                   }
          }}/>
        </div>
      </header>
      <Choose setWorkwidth={setWorkwidth}
              setAllwidth={setAllwidth}
              allwidth = {allwidth}
              workwidth={workwidth}/>
      <Result area = {area}
              allwidth = {allwidth}
              workwidth={workwidth}/>
      <Footer/>
    </div>
  );
}

export default App;
