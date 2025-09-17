// src/components/IngredientList/IngredientList.jsx
import { useStack } from 'react'


const IngredientsList = (props) => {
    console.log(props)
    return (
        <>
            <ul>
                {props.ingredients.map((ingredient, index) => {
                   return <li key={index} style={{backgroundColor: ingredient.color}}>{ingredient.name}
                    <button onClick={() => props.addToBurger(ingredient)}>+</button>
                    </li>
                    
                })}
            </ul>;
        </>
    )
};

export default IngredientsList;
