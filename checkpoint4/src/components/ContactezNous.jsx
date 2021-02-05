import "./ContactezNous.css";
import Navbar from "./Navbar";

const ContactezNous = () =>{
    return (
        <div className="ContactezNous">
          <Navbar />
          <div className="contactUsTitre">Contactez-Nous</div>
          <form className="contactUsInput">
            <input placeholder="Email"/>
            <input placeholder="Sujet"/>
            <input placeholder="Requête"/>
          </form>
          <button className="contactUsBttn">Envoyez</button>
        </div>
    )
}




export default ContactezNous;