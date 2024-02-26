import React from 'react';
import './Overview.css';
import cookImage from "../../assets/cook.jpg";
import carrotImage from "../../assets/carrot.jpg";
import spaghettiImage from "../../assets/spaghetti.jpg";
import tableImage from "../../assets/table.jpg";

const Overview = () => {
    return (
        <div className="overview-container">
            <div className="overview-header">
                <h1>Willkommen auf unserem Foodblog!</h1>
                <div className="header-image" style={{ backgroundImage: `url(${cookImage})` }}></div>
            </div>
            <div className="overview-content">
                <p>
                    Herzlich willkommen! Hier dreht sich alles um die Freude am Kochen, leckere Rezepte und nützliche Kochtipps, um deine Küche in einen kulinarischen Genuss zu verwandeln.
                </p>
                <div className="additional-info">
                    <div className="text-info">
                        <h2>Rezepte und Kochtipps</h2>
                        <p>
                            Entdecke köstliche Rezepte aus verschiedenen Küchen der Welt und nützliche Tipps und Tricks, um deine Kochkünste zu verbessern. Von einfachen Gerichten bis hin zu raffinierten Spezialitäten ist für jeden etwas dabei.
                        </p>
                    </div>
                    <div className="image-info">
                        <img src={carrotImage} alt="Carrot" />
                    </div>
                </div>
                <div className="additional-info">
                    <div className="image-info">
                        <img src={spaghettiImage} alt="Spaghetti" />
                    </div>
                    <div className="text-info">
                        <h2>Lecker und Gesund</h2>
                        <p>
                            Genieße gesunde und schmackhafte Gerichte, die deine Sinne verführen und den Körper mit wertvollen Nährstoffen versorgen. Unsere Rezepte sind nicht nur köstlich, sondern auch gut für die Gesundheit.
                        </p>
                    </div>
                </div>
                <div className="additional-info">
                    <div className="text-info">
                        <h2>Alles für deinen Geschmack</h2>
                        <p>
                            Erkunde die reiche Vielfalt an Aromen und Geschmacksrichtungen aus verschiedenen Kulturen der Welt. Von herzhaften Hauptgerichten bis hin zu verlockenden Desserts bieten wir eine facettenreiche Auswahl an Rezepten, die für jeden Anlass geeignet sind.
                        </p>
                    </div>
                </div>
                <div className="additional-info">
                    <div className="bottom-image" style={{ backgroundImage: `url(${tableImage})` }}></div>
                </div>
                <div className="additional-info">
                    <div className="text-info">
                        <h2>Viel Spaß beim Ausprobieren!</h2>
                        <p>
                            Wir laden dich ein, unsere Rezepte auszuprobieren und deine kulinarischen Fähigkeiten zu verbessern. Viel Spaß beim Stöbern, Kochen und Genießen!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Overview;
