import "./SujetsRoyaux.css";
import Navbar from "./Navbar";
import Jean from "../assets/Alcoolique.jpg"

const SujetsRoyaux = () =>{
    return (
        <div className="SujetsRoyaux">
          <Navbar />
          <div className="titreSujets">Sujets Royaux</div>
          <div className="tableSujets">
            <div className="lineSujets">
              <img src={Jean} alt="" />
              <div className="sujetsFirstame">Nom : Bertrand</div>
              <div className="sujetsLastname">Prénom : Michel</div>
              <div className="sujetsAge">Âge : 34 ans</div>
              <div className="sujetsFunction">Fonction : Pilier de bar</div>
              <div className="sujetsFortune"> Fortune : Pauvre</div>
              <div className="sujetsShop">Commerce : Aucun</div>
            </div>
            <div className="lineSujets">
              <img src={Jean} alt="" />
              <div className="sujetsFirstame">Nom : Bertrand</div>
              <div className="sujetsLastname">Prénom : Michel</div>
              <div className="sujetsAge">Âge : 34 ans</div>
              <div className="sujetsFunction">Fonction : Pilier de bar</div>
              <div className="sujetsFortune"> Fortune : Pauvre</div>
              <div className="sujetsShop">Commerce : Aucun</div>
            </div>
            <div className="lineSujets">
              <img src={Jean} alt="" />
              <div className="sujetsFirstame">Nom : Bertrand</div>
              <div className="sujetsLastname">Prénom : Michel</div>
              <div className="sujetsAge">Âge : 34 ans</div>
              <div className="sujetsFunction">Fonction : Pilier de bar</div>
              <div className="sujetsFortune"> Fortune : Pauvre</div>
              <div className="sujetsShop">Commerce : Aucun</div>
            </div>
          </div>
        </div>
    )
}




export default SujetsRoyaux;