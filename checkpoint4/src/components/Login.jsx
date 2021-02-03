import "./Login.css";

const Login = () =>{
    return(
        <div className="allLogin">
            <div className="boxRegister">
                <form className="register">
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                </form>
                <div className="registerBttn">
                    <div className="bttn1">Ok</div>
                </div>
            </div>
            <div className="boxLogin">
                <form className="login">
                    <input></input>
                    <input></input>
                </form>
                <div classname="loginBttn">
                    <div className="bttn2">Ok</div>
                </div>
            </div>
        </div>
    )
}


export default Login;