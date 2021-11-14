import React from "react";
import "./Auth.css";
import Login from "./forms/Login";
import {createPortal} from "react-dom";
import {Link, Route, useHistory, withRouter} from "react-router-dom";

const AuthModal = ({background}) => {
    const history = useHistory();
    const closeModal = e => {
        e.stopPropagation();
        history.push(background.pathname);
    };
    console.log(background);
    return createPortal(
        <div className="modal-overlay">
            <div className="modal-container">
                <Route path="/login"><Login background={background.pathname}/></Route>
                <div className="auth-section">
                    <button className="button-light" onClick={closeModal}>Close</button>
                </div>
                <p>Forgot your password? <Link to={{
                    pathname: "/auth/account-recover",
                }}>Click here.</Link></p>
            </div>
        </div>,
        document.getElementById("modal-root")
    )
}

export default withRouter(AuthModal);