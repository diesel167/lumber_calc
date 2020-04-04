import React, { useState, useRef} from "react";
import lumber1 from "../img/lumber1.jpg";
import lumber2 from "../img/lumber2.jpg";
import lumber3 from "../img/lumber3.jpg";
import ChooseItem from "./ChooseItem";

export default function Choose({setWorkwidth, setAllwidth}) {
  let [selected, setSelected] = useState('');
  let [firstChoose, setFirstChoose] = useState(true);
  let [checked, setChecked] = useState(false);
  let elements = ['lumber1','lumber2','lumber3'];
  let [refs, setRefs] = useState([
    useRef('lumber1'),
    useRef('lumber2'),
    useRef('lumber3')
  ]);


  //handler when select lumber - set new selected state
  let selection = (e) =>{
    setFirstChoose(false);
    if(e.target.value!==selected){
      setChecked(true);
      setSelected(e.target.value);
      setWorkwidth(0);  //reset widths
      setAllwidth(0);
    }
  };

  return (<React.Fragment>
    <p className='choose-type'>Выберите тип материала:</p>
    <div className="choose">
      <ChooseItem selected={selected}
                  selection={selection}
                  firstChoose={firstChoose}
                  setWorkwidth={setWorkwidth}
                  lumber={lumber1}
                  refs={refs[0]}
                  allrefs={refs}
                  lumberName={'lumber1'}
                  name={'Вагонка'}
                  setAllwidth={setAllwidth}
                  setSelected={setSelected}
                  setChecked={setChecked}
                  setFirstChoose={setFirstChoose}
                  elements={elements}
                  checked={checked}/>
      <ChooseItem selected={selected}
                  selection={selection}
                  firstChoose={firstChoose}
                  setWorkwidth={setWorkwidth}
                  lumber={lumber2}
                  refs={refs[1]}
                  allrefs={refs}
                  lumberName={'lumber2'}
                  name={'Половая доска'}
                  setSelected={setSelected}
                  setChecked={setChecked}
                  setFirstChoose={setFirstChoose}
                  elements={elements}
                  setAllwidth={setAllwidth}
                  checked={checked}/>
      <ChooseItem selected={selected}
                  selection={selection}
                  firstChoose={firstChoose}
                  setWorkwidth={setWorkwidth}
                  lumber={lumber3}
                  refs={refs[2]}
                  allrefs={refs}
                  lumberName={'lumber3'}
                  name={'Планкен'}
                  setSelected={setSelected}
                  setChecked={setChecked}
                  setFirstChoose={setFirstChoose}
                  elements={elements}
                  setAllwidth={setAllwidth}
                  checked={checked}/>
    </div>
  </React.Fragment>)
}