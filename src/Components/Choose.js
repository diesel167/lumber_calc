import React, { useState } from "react";
import lumber1 from "../img/lumber1.jpg";

export default function Choose() {
  let [selected, setSelected] = useState('');
  let selection =(e)=>{
    setSelected(e.target.value);
  };
  return <div className="choose">
    <div className="img">
      <label htmlFor="lumber1"
             className='radio'>
        <input type="radio"
               id="lumber1"
               name="choose"
               value="lumber1"
               onClick={(e)=>selection(e)}/>
        <img src={lumber1} className='lumber1' alt='lumber1'/>
      </label>
    </div>
    <div  className="img">
      <label htmlFor="lumber2"
             className='radio'>
        <input type="radio"
               id="lumber2"
               name="choose"
               value="lumber2"
               onClick={(e)=>selection(e)}/>
        <img src={lumber1} className='lumber1' alt='lumber2'/>
      </label>
    </div>
    <div  className="img">
      <label htmlFor="lumber3"
             className='radio'>
        <input type="radio"
               id="lumber3"
               name="choose"
               value="lumber3"
               onClick={(e)=>selection(e)}/>
        <img src={lumber1} className='lumber1' alt='lumber3'/>
      </label>
    </div>
  </div>

}
