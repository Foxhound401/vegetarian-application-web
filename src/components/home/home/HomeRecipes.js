import React, {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa";
import {apiBase} from "../../../helpers/Helpers";
import Panel from "../../commons/elements/containers/Panel";
import Tile from "../../commons/elements/containers/Tile";
import {PanelLoader} from "../../commons/elements/loaders/Loader";

const HomeRecipes = () => {
    const api = `${apiBase}/recipes/get10recipes`;
    const [data, setData] = useState([]);

    // Executes fetch once on page load
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(api);
            const result = await response.json();
            setData(result.listResult);
        }
        fetchData().catch(error => {
            console.error(error);
        });
    }, [api]);

    // Handles slider scrolling on button click
    const ref = useRef(null);
    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };

    return (
        <section>
            <header className="section-header linked-header">
                <h1>Our community's latest recipes</h1>
                <Link to="/browse/recipes"><FaAngleRight/>See more</Link>
            </header>
            {data &&
            <Panel>
                {data.length > 0 ?
                    <>{/*Scroll buttons*/}
                        <button className="panel-scroll scroll-left" onClick={() => scroll(-350)}>
                            <FaAngleLeft/>
                        </button>
                        <button className="panel-scroll scroll-right" onClick={() => scroll(350)}>
                            <FaAngleRight/>
                        </button>
                        {/*Scrollable card container*/}
                        <div className="panel-slider" ref={ref}>
                            {/*Iterates over the result JSON and renders a matching amount of card items*/}
                            {data.map(recipe => (
                                <Tile className="tile-small"
                                      key={recipe.recipe_id}
                                      id={recipe.recipe_id}
                                      type="recipe"
                                      title={recipe.recipe_title}
                                      thumbnail={recipe.recipe_thumbnail}
                                      firstName={recipe.first_name}
                                      lastName={recipe.last_name}
                                      time={recipe.time}
                                      totalLike={recipe.totalLike}/>
                            ))}
                        </div>
                    </>
                    :
                    <PanelLoader/>
                }
            </Panel>}
        </section>
    )
}

export default HomeRecipes;