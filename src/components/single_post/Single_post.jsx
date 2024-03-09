import React from 'react'
import "./Single_post.css";

import placeholder_image from "../../assets/placeholder.jpg";
import jsonData from "../../assets/text.json";

const recipeTitle = jsonData[1].title;
const recipeText = jsonData[1].content;


export default function Single_post() {
  return (
    <div className="Single_post">
      <div className="single_post_Box">
        <div className="image_container">
          <img src={placeholder_image} alt="" className="single_post_Image" />
        </div>
        <div>
          <h1 className="single_post_title">{recipeTitle}</h1>
          <p className="single_post_text">
            {recipeText}
          </p>
        </div>
      </div>
    </div>
  );
}
