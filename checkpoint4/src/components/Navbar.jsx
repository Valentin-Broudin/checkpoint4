import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
            <div className="navbar">
                <ul className="liste">          
                    <Link className="Link" to="/Accueil">
                        <li className="items">Accueil</li>
                    </Link>
                    <Link className="Link" to="/FamilleRoyal">
                        <li className="items">Famille Royale</li>
                    </Link>
                    <Link className="Link" to="/SujetsRoyaux">
                        <li className="items">Sujets Royaux</li>
                    </Link>
                    <Link className="Link" to="/Commerces">
                        <li className="items">Commerces</li>
                    </Link>
                    <Link className="Link" to="/ContactezNous">
                        <li className="items">Contactez-Nous</li>
                    </Link>
                    <Link className="Link" to="/Profil">
                        <li className="items">Profil</li>
                    </Link>
                </ul>
            </div>
    )
}

export default Navbar;