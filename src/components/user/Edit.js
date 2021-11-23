import React from "react";
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import PostSidebar from "./PostSidebar";
import EditRecipe from "./edit/EditRecipe";
import EditBlog from "./edit/EditBlog";
import LocalizedStrings from "react-localization";

const Edit = () => {
    // Localizations
    let strings = new LocalizedStrings({
        en: {

        },
        vi: {

        }
    });

    const urlRecipe = "/edit/recipe";
    const urlBlog = "/edit/blog";

    return (
        <div className="page-container">
            <div className="grid-container">
                <main>
                    <Switch>
                        <Route exact path={urlRecipe}><EditRecipe/></Route>
                        <Route exact path={urlBlog}><EditBlog/></Route>
                    </Switch>
                </main>
                <PostSidebar/>
            </div>
        </div>
    )
}

export default Edit;