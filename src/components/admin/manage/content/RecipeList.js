import React, {useEffect, useState} from "react";
import {apiBase} from "../../../../helpers/Helpers";
import Panel from "../../../commons/elements/containers/Panel";
import ArticleCard from "../../../commons/elements/containers/ArticleCard";
import {SectionLoader} from "../../../commons/elements/loaders/Loader";

const RecipeList = () => {
    const [data, setData] = useState([]);
    const token = JSON.parse(localStorage.getItem("accessToken"));

    let headers = new Headers();
    if (token) {
        headers.append("Authorization", `Bearer ${token.token}`);
    }
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    const fetchData = async () => {
        // Generate request
        let request = {
            method: 'GET',
            headers: headers,
        };
        const api = `${apiBase}/recipes/admin/getall?page=1&limit=300`;
        const response = await fetch(api, request);
        const result = await response.json();
        setData(result.listResult);
    }

    // Executes fetch once on page load
    useEffect(() => {
        fetchData().catch(error => {
            console.error(error);
        });
    }, []);

    return (
        <>
            {data &&
            <Panel filler="card-medium">
                {/*Iterates over the result JSON and renders a matching amount of card items*/}
                {data.length > 0 ?
                    data.map(item => (
                        <ArticleCard className="card-medium"
                                     key={item.recipe_id}
                                     id={item.recipe_id}
                                     type="recipe"
                                     title={item.recipe_title}
                                     thumbnail={item.recipe_thumbnail}
                                     firstName={item.first_name}
                                     lastName={item.last_name}
                                     userId={item.user_id}
                                     time={item.time_created}
                                     totalLikes={item.totalLike}
                                     status={item.status}/>
                    ))
                    :
                    <SectionLoader/>
                }
            </Panel>}
        </>
    )

}

export default RecipeList;