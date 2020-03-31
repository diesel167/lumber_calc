import React, { useState } from "react";


export default function Result({area,allwidth,workwidth}) {

  let [length, setLength] = useState(0);
  let increasing;
  //how much elements as result need to order
  let elements;

  //if not set whether of widths
  if(!allwidth || !workwidth){
    console.log(workwidth);
    elements = 0;
    increasing = 1;
  }
  else{
    increasing = allwidth/workwidth;
    if(!length){
      elements = 0;
    }
    else{
      elements = (area*increasing*1000/(allwidth*length));
    }
  }

  let orderArea = (area*increasing).toFixed(1); //real area to order after increasing




  return <div className='result'>
    <h3>{'Ваш заказ составляет: ' + orderArea + ' м2'}</h3>
    <label>
      <p>Введите длину:</p>
      <input  type="text"
              disabled={!area>0}
              value={length}
              onChange={(e)=>{
                setLength(+e.target.value<<0);    //delete Nulls in the beginning of number
              }}/>
      <p>м</p>
    </label>
    <h3>{'Количество необходимых элементов: ' + elements}</h3>
  </div>

}