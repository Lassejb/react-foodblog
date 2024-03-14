import React, { lazy, Suspense } from "react";
import "./Single_post.css";
import { useParams } from "react-router-dom";

import Zutatenliste from "../Zutatenliste/Zutatenliste";
import Zutaten from "../Zutatenliste/Zutaten";

import placeholder_image from "../../assets/placeholder.jpg";
import jsonData from "../../assets/text.json";


const Zubereitung = lazy(() => import("../Zubereitung/Zubereitung"));

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
          <p className="single_post_zutaten">{jsonData[id].zutaten}</p>
        </div>
        <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Zubereitung value={id} />
        </Suspense>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}
