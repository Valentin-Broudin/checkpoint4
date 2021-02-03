import "./Login.css";

const Login = () =>{
    return(
        <div className="allLogin">
            <div className="boxRegister">
                <form className="register">
                    <input placeholder="Nom"/>
                    <input placeholder="Prénom"/>
                    <input placeholder="Mail"/>
                    <input placeholder="Mot de passe"/>
                    <input placeholder="Confirmer Mot de passe"/>
                </form>
                <button className="bttn1">Ok</button>
            </div>
            <div className="boxLogin">
                <form className="login">
                    <input placeholder="Mail"/>
                    <input placeholder="Mot de passe"/>
                </form>
                <button className="bttn2">Ok</button>
            </div>
        </div>
    )
}


export default Login;