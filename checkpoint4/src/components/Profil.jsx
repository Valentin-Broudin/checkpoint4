import "./Profil.css";
import Navbar from "./Navbar";

const Profil = () =>{
    return (
        <div className="Profil">
          <Navbar />
          <div className="profilTitre">Profil</div>
          <div>
              <div>Nom</div>
              <div>Prénom</div>
              <img src="" alt="" />
              <input placeholder="Fonction"/>
              <input placeholder="Fortune Estimée"/>
              <input placeholder="Bio"/>
          </div>
        </div>
    )
}




export default Profil;