import "./FamilleRoyale.css";
import Navbar from "./Navbar";
import  Daughter  from "../assets/Daughter.jpg";
import  King  from "../assets/King.jpg";
import  Queen  from "../assets/Queen.jpg";


const FamilleRoyale = () =>{
    return (
        <div className="FamilleRoyale">
          <Navbar />
          <div className="titreRoyaleFamilie">Famille Royale</div>
          <div className="boxFamilie">
            <img src= { King } alt="" className="boxKing"></img>
            <img src= { Daughter } alt="" className="boxDaughter"></img>
            <img src= { Queen } alt="" className="boxQueen"></img>
          </div>
        </div>
    )
}




export default FamilleRoyale;