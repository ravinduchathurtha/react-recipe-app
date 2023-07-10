import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, img, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.title}>{title}</h1>
      <h3>Ingredients</h3>
      <ol>
        {ingredients.map(ingredient =>  (
            <li>{ingredient.text}</li>
        ))}
      </ol>
      <h3>Calories</h3>
      <p>{calories}</p>
      <img className={style.image} src={img} alt={title} />
    </div>
  )
};

export default Recipe
