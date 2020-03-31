import React, { useEffect, useState } from "react";
import lumber1 from "../img/lumber1.jpg";
import lumber2 from "../img/lumber2.jpg";

export default function Choose({setWorkwidth, setAllwidth, allwidth,workwidth}) {
  let [selected, setSelected] = useState('');
  //handler when select lumber - set new selected state
  let selection = (e) =>{
    if(e.target.value!==selected){
      setSelected(e.target.value);
      setWorkwidth(0);  //reset widths
      setAllwidth(0);
    }
  };
  //handler for show/hide parameters for choosen lumber
  let showParameters = (a) => selected===a?' show':' hide';

  let choseParameters = (e) =>{

  };
  return <div className="choose">
    <div  className="img">
      <div className={'parameters allwidth' + showParameters('lumber1')}>
        <p>Общая ширина:</p>
        <input  type="text"
                value={allwidth}
                onChange={(e)=>{
                e.target.value = e.target.value<<0;    //delete Nulls in the beginning of number
                setAllwidth(+e.target.value)}}/>
        <p className="mm">мм</p>
      </div>
      <div className={'parameters workwidth' + showParameters('lumber1')}>
        <p>Рабочая ширина:</p>
        <input  type="text"
                value={workwidth}
                onChange={(e)=>{
                  e.target.value = e.target.value<<0;
                  setWorkwidth(+e.target.value)}}/>
        <p className="mm">мм</p>
      </div>
      <label htmlFor="lumber1"
             className='radio'>
        <input type="radio"
               id="lumber1"
               name="choose"
               value="lumber1"
               onClick={(e)=>selection(e)}/>
        <div className="wrapper">
          <img src={lumber1} className='lumber1 lumber' alt='lumber1'/>
        </div>
      </label>
    </div>
    <div  className="img">
      <div className={'parameters allwidth' + showParameters('lumber2')}>
        <p>Общая ширина:</p>
        <input  type="text"
                value={allwidth}
                onChange={(e)=>{
                  e.target.value = e.target.value<<0;    //delete Nulls in the beginning of number
                  setAllwidth(+e.target.value)}}/>
        <p className="mm">мм</p>
      </div>
      <div className={'parameters workwidth' + showParameters('lumber2')}>
        <p>Рабочая ширина:</p>
        <input  type="text"
                value={workwidth}
                onChange={(e)=>{
                  e.target.value = e.target.value<<0;
                  setWorkwidth(+e.target.value)}}/>
        <p className="mm">мм</p>
      </div>
      <label htmlFor="lumber2"
             className='radio'>
        <input type="radio"
               id="lumber2"
               name="choose"
               value="lumber2"
               onClick={(e)=>selection(e)}/>
        <div className="wrapper">
          <img src={lumber2} className='lumber2 lumber' alt='lumber2'/>
        </div>
      </label>
    </div>
    <div  className="img">
      <div className={'parameters allwidth' + showParameters('lumber3')}>
        <p>Общая ширина:</p>
        <input  type="text"
                value={allwidth}
                onChange={(e)=>{
                  e.target.value = e.target.value<<0;    //delete Nulls in the beginning of number
                  setAllwidth(+e.target.value)}}/>
        <p className="mm">мм</p>
      </div>
      <div className={'parameters workwidth' + showParameters('lumber3')}>
        <p>Рабочая ширина:</p>
        <input  type="text"
                value={workwidth}
                onChange={(e)=>{
                  e.target.value = e.target.value<<0;
                  setWorkwidth(+e.target.value)}}/>
        <p className="mm">мм</p>
      </div>
      <label htmlFor="lumber3"
             className='radio'>
        <input type="radio"
               id="lumber3"
               name="choose"
               value="lumber3"
               onClick={(e)=>selection(e)}/>

        <div className="wrapper">
          <img src={lumber1} className='lumber1' alt='lumber3'/>
        </div>
      </label>
    </div>
  </div>
}
