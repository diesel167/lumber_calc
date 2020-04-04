import React, {useRef} from "react";
import {useClickAway} from 'react-use';

export default function ChooseItem({setWorkwidth,
                                     setAllwidth,
                                     selected,
                                     selection,
                                     firstChoose,
                                     lumber,
                                     lumberName,
                                     name,
                                     refs,
                                     allrefs,
                                     setSelected,
                                     setFirstChoose}) {

  //handler for show/hide parameters for choosen lumber
  let showParameters = (item) => selected===item?' show':' hide';
  let makeInactive = (item) => {
    return selected!==item&&!firstChoose?' inactive':'';
  };

  //create reference for this component
  const ref = useRef(null);

  //click away component listener
  useClickAway(ref, (e) => {
    //check if the click not on inputs or switch theme
    if(e.path[0].tagName!=='INPUT' && e.path[0].className.split(' ')[0]!=='slider'){
      //if click not on other lumbers
        setSelected('');
        setFirstChoose(true);
        //reset input radio to unchecked
        allrefs.map((i)=>{
          i.current.checked = false;
        })
      }
  }, ['click']);

  return <div ref={ref}  className={'img'+ makeInactive(lumberName)}>
    <p className="name">{name}</p>
    <div className={'parameters allwidth' + showParameters(lumberName)}>
      <p>Общая ширина:</p>
      <input  type="text"
              placeholder='0'
              onChange={(e)=>setAllwidth(+e.target.value)}/>
      <p className="mm">мм</p>
    </div>
    <div className={'parameters workwidth' + showParameters(lumberName)}>
      <p>Рабочая ширина:</p>
      <input  type="text"
              placeholder='0'
              onChange={(e)=>setWorkwidth(+e.target.value)}/>
      <p className="mm">мм</p>
    </div>
    <label htmlFor={lumberName}
           className='radio'>
      <input type="radio"
             ref={refs}
             id={lumberName}
             name="choose"
             value={lumberName}
             onClick={(e)=>selection(e)}/>
      <div className="wrapper">
        <img src={lumber} className={lumberName+' lumber'} alt={lumberName}/>
      </div>
    </label>
  </div>
}