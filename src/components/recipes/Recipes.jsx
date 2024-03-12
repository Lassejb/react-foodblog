import React from "react";
import { Link } from "react-router-dom";
import "./Recipes.css";

const Recipes = () => {
  return (
    <div className="recipes">
      <h1 className="recipes-title">Rezepte</h1>
      <p className="recipes-content">
        Hier sind einige köstliche Rezepte, die du ausprobieren kannst!
      </p>
      <Link to="/recipes/single_post/0">
        <button className="btn">Zu den Rezepten</button>
      </Link>
      <Link to="/recipes/single_post/1">
        <button className="btn">Zu den Rezepten 2</button>
      </Link>
    </div>
  );
};

export default Recipes;
