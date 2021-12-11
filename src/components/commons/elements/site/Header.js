import React, {useContext, useEffect, useState} from "react";
import "./Header.css";
import {NavLink, useLocation, withRouter} from "react-router-dom";
import {headerStrings} from "../../../../resources/CommonDisplayStrings";
import {LocaleContext} from "../../../../context/LocaleContext";
import {UserContext} from "../../../../context/UserContext";
import placeholderAvatar from "assets/user-image-default.png";
import HeaderBrand from "./HeaderBrand";
import Navbar from "../bars/Navbar";
import HeaderSearch from "./HeaderSearch";
import Logout from "../../../auth/Logout";

const Header = ({locale, setLocale}) => {
    const location = useLocation();

    // Localizations
    headerStrings.setLanguage(useContext(LocaleContext));

    // Gets user info
    const user = useContext(UserContext);
    let token = JSON.parse(localStorage.getItem("accessToken"));

    // Checks scroll offset to resize header with conditional CSS class
    const [shrink, setShrink] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setShrink(window.pageYOffset > 400)
            );
        }
    }, []);

    // Renders the header
    return (
        <header className={`header-container ${shrink ? "header-shrunk" : ""}`}>
            {/*Left side nav with logo and basic navigation links*/}
            <div className="header-content">
                <section className="header-section">
                    <HeaderBrand/>
                    <Navbar>
                        <NavLink to="/home">{headerStrings.headerHome}</NavLink>
                        {!location.pathname.match("/console") &&
                        <NavLink to="/about">{headerStrings.headerAbout}</NavLink>}
                    </Navbar>
                    {!location.pathname.match("/console") && !location.pathname.match("/search") &&
                    <HeaderSearch placeholder={headerStrings.headerSearchPlaceholderUser}/>}
                    {location.pathname.match("/console") &&
                    <HeaderSearch placeholder={headerStrings.headerSearchPlaceholderAdmin}/>}
                </section>
                {/*Right-side nav with authentication and profile links*/}
                <section className="header-section">
                    <Navbar>
                        {token ? <>
                            <NavLink to="/profile">
                                {user ? <>
                                    <picture className="profile-image">
                                        <source srcSet={user.profile_image}/>
                                        <img src={placeholderAvatar} alt=""/>
                                    </picture>
                                    {user.first_name}
                                </> : <>{headerStrings.headerProfile}</>}
                            </NavLink>
                            <Logout/>
                        </> : <>
                            <NavLink to={{
                                pathname: "/login",
                                state: {background: location}
                            }}>{headerStrings.headerSignIn}</NavLink>
                            <NavLink to={{
                                pathname: "/auth/register",
                            }}>{headerStrings.headerSignUp}</NavLink>
                        </>}
                    </Navbar>
                    <select value={locale} onChange={e => setLocale(e.target.value)}>
                        <option value="en">English</option>
                        <option value="vi">Tiếng Việt</option>
                    </select>
                </section>
            </div>
        </header>
    );
}

export default withRouter(Header);