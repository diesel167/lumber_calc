import React, { useState } from "react";


export default function Result({area,allwidth,workwidth}) {

  let [length, setLength] = useState(0);
  let [plus5, setPlus5] = useState(1);
  let increasing;
  //how much elements as result need to order
  let elements;
  //if not set whether of widths
  if(!allwidth || !workwidth){
    elements = 0;
    increasing = 1;
  }
  else{
    increasing = allwidth/workwidth;
    if(!length){
      elements = 0;
    }
    else{
      elements = Math.ceil(area*1000*plus5/(workwidth*length));
    }
  }

  let orderArea = (area*increasing*plus5).toFixed(1); //real area to order after increasing

  return <div className='result'>
    <h3>{'Ваш заказ составляет: ' + orderArea + ' м2'}</h3>
    <label>
      <p>Введите длину:</p>
      <input  type="text"
              disabled={!area>0}
              placeholder='0'
              onChange={(e)=>{
                console.log(+e.target.value);
                setLength(+e.target.value);    //delete Nulls in the beginning of number
              }}/>
      <p>м</p>
    </label>
    <label  className='plus5'>
      <input className='checkbox'
             type="checkbox"
             disabled={!area>0}
             onClick={(e)=>{
        e.target.checked?setPlus5(1.05):setPlus5(1);
      }}/>
      <p>С запасом 5%</p>
    </label>
    <h3>{'Количество необходимых элементов: ' + elements + ' шт'}</h3>
  </div>

}