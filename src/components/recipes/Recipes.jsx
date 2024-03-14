import React from "react";
import { Link } from "react-router-dom";
import jsonData from "../../assets/text.json";
import "./Recipes.css";

const Recipes = () => {
  return (
    <div className="recipes">
      <h1 className="recipes-title">Rezepte</h1>
      <p className="recipes-content">
        Hier sind einige köstliche Rezepte, die du ausprobieren kannst!
      </p>
      {jsonData.map((recipe, index) => (
        <Link key={recipe.id} to={`/recipes/single_post/${index}`}>
          <div className="recipe-card">
            <img src={recipe.picture} alt={recipe.title} className="recipe-image" />
            <h3 className="recipe-title">{recipe.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Recipes;
