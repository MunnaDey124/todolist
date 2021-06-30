import React from 'react';
import { useState } from "react";
import './todoItem.css';

const TodoItem = () => {
    const [text, setText]=useState("");
  const [item,setItems]=useState([]);
   const click =()=>{
     if(!text){

     }
     else{
       setItems([...item,text]);
       setText('');
     }
   }
    return (
            <>
      <div className="container box_Style">
        <h1 className="text-center">Todo List</h1>
          <div className="input_style">
                <input className='input_decoration'  type="text" name="enter text" id="" 
                value={text} onChange={(e)=>setText(e.target.value)}/>
          <div>
            <button className="button_decoration"onClick={click}>Add</button>
          </div>
          </div>
      <div className="element_position">
        {
          item.map((element,idex)=>{
            return(
              <div className="element_style">
                <ul>
                <li>{element}</li>
              </ul>
              </div>
            )
          })
        }
      </div>
      </div>
    </>
    );
};

export default TodoItem;