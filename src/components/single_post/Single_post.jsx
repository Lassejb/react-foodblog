import * as React from "react";
import "./Single_post.css";
import { useParams } from "react-router-dom";

import Zutatenliste from "../Zutatenliste/Zutatenliste";
import Zubereitung from "../Zubereitung/Zubereitung";

import placeholder_image from "../../assets/placeholder.jpg";
import jsonData from "../../assets/text.json";

export default function Single_post() {
  const { id } = useParams();
  return (
    <div className="Single_post">
      <div className="single_post_Box">
        <div className="image_container">
          <img src={placeholder_image} alt="" className="single_post_Image" />
        </div>
        <div>
          <h1 className="single_post_title">{jsonData[id].title}</h1>
          <p className="single_post_text">{jsonData[id].content}</p>
        </div>
        <div>
          <Zubereitung />
        </div>
      </div>
    </div>
  );
}
