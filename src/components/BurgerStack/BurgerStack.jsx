// src/components/BurgerStack/BurgerStack.jsx
import {useState} from 'react'

const BurgerStack = (props) => {
  return (
    <ul>
        {props.stack.map((ingredient, index) => {
            return <li key={index} style={{backgroundColor: ingredient.color}}>{ingredient.name}
            <button onClick={() => props.removeFromBurger(index)}>X</button> 
            </li>
        })}
    </ul>

  )
};

export default BurgerStack;
