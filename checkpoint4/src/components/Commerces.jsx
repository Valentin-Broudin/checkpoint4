import "./Commerces.css";
import Navbar from "./Navbar";

const Commerces = () =>{
    return (
        <div className="Commerces">
          <Navbar />
          <div className="titreCommerces">Commerces</div>
          <div className="bigBox">
            <div className="boxAchat">
                <div className="boxBuy"></div>
            </div>
            <div className="boxVente">
                <div className="boxSell"></div>
            </div>
          </div>
        </div>
    )
}




export default Commerces;