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
      console.log('Ширина=' + workwidth);
      console.log('Длина=' + length);
      elements = Math.ceil(area*1000/(workwidth*length));
    }
  }

  let orderArea = (area*increasing).toFixed(1); //real area to order after increasing



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
    <h3>{'Количество необходимых элементов: ' + elements}</h3>
  </div>

}