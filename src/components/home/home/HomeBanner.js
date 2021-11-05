import React, {useContext, useEffect, useRef, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {apiBase} from "../../../helpers/Helpers";
import {PanelLoader} from "../../commons/elements/loaders/Loader";
import bannerBackground from "assets/profile-banner-default.png";
import {UserContext} from "../../../context/UserContext";
import {FaAngleRight} from "react-icons/fa";
import ArticleTile from "../../commons/elements/containers/ArticleTile";

const HomeBanner = () => {
    const location = useLocation();
    const user = useContext(UserContext);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const fetchData = async () => {
        setIsLoading(true);
        const api = `${apiBase}/recipes/get5bestrecipes`;
        const response = await fetch(api);
        if (response.ok) {
            const result = await response.json();
            setData(result.listResult);
            setIsLoading(false);
        } else if (response.status >= 400 && response.status < 600) {
            setIsError(true);
            setIsLoading(false);
        }
    }
    console.log(data)
    console.log(isLoading)
    console.log(isError)
    // Handle banner scroll button
    const scrollRef = useRef(null);
    const executeScroll = () => scrollRef.current.scrollIntoView({behavior: 'smooth'});
    // Executes fetch once on page load
    useEffect(() => {
        fetchData().catch(error => {
            console.error(error);
        });
    }, [location]);

    return (
        <div className="banner-container banner-home">
            <div className="banner">
                <section className="banner-section banner-showcase">
                    <header className="section-header">
                        <h1>Popular recipes</h1>
                    </header>
                    <div className="section-content">
                        {!isLoading ?
                            <div className="banner-panel">
                                {/*Large tile*/}
                                {data && data.length > 0 && data.map((item, index) => (
                                    <ArticleTile
                                        className={`${index === 0 ? "tile-half" : "tile-eighth tile-eighth-" + index}`}
                                        key={item.recipe_id}
                                        id={item.recipe_id}
                                        type="recipe"
                                        title={item.recipe_title}
                                        thumbnail={item.recipe_thumbnail}
                                        userId={item.user_id}
                                        firstName={item.first_name}
                                        lastName={item.last_name}
                                        time={item.time_created}
                                        totalLikes={item.totalLike}/>))}
                                {/*{data[0] &&*/}
                                {/*<div className="tile tile-half">*/}
                                {/*    <Link className="tile-url" to={`/view/recipe/${data[0].recipe_id}`}/>*/}
                                {/*    <picture className="tile-thumbnail">*/}
                                {/*        <source srcSet={""}/>*/}
                                {/*        <img src={data[0].recipe_thumbnail} alt=""/>*/}
                                {/*    </picture>*/}
                                {/*    <div className="tile-overlay">*/}
                                {/*        <div className="tile-details">*/}
                                {/*            {data[0].totalLike !== undefined &&*/}
                                {/*            <div className="tile-likes"><FaRegHeart/> {data[0].totalLike}</div>}*/}
                                {/*            <h1 className="tile-title">{data[0].recipe_title}</h1>*/}
                                {/*            <p className="tile-author">by {data[0].first_name} {data[0].last_name}</p>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>}*/}
                                {/*/!*Top left small tile*!/*/}
                                {/*{data[1] &&*/}
                                {/*<div className="tile tile-eighth tile-eighth-1">*/}
                                {/*    <Link className="tile-url" to={`/view/recipe/${data[1].recipe_id}`}/>*/}
                                {/*    <picture className="tile-thumbnail">*/}
                                {/*        <source srcSet={""}/>*/}
                                {/*        <img src={data[1].recipe_thumbnail} alt=""/>*/}
                                {/*    </picture>*/}
                                {/*    <div className="tile-overlay">*/}
                                {/*        <div className="tile-details">*/}
                                {/*            {data[1].totalLike !== undefined &&*/}
                                {/*            <div className="tile-likes"><FaRegHeart/> {data[1].totalLike}</div>}*/}
                                {/*            <h1 className="tile-title">{data[1].recipe_title}</h1>*/}
                                {/*            <p className="tile-author">by {data[1].first_name} {data[1].last_name}</p>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>}*/}
                                {/*/!*Top right small tile*!/*/}
                                {/*{data[2] &&*/}
                                {/*<div className="tile tile-eighth tile-eighth-2">*/}
                                {/*    <Link className="tile-url" to={`/view/recipe/${data[2].recipe_id}`}/>*/}
                                {/*    <picture className="tile-thumbnail">*/}
                                {/*        <source srcSet={""}/>*/}
                                {/*        <img src={data[2].recipe_thumbnail} alt=""/>*/}
                                {/*    </picture>*/}
                                {/*    <div className="tile-overlay">*/}
                                {/*        <div className="tile-details">*/}
                                {/*            {data[2].totalLike !== undefined &&*/}
                                {/*            <div className="tile-likes"><FaRegHeart/> {data[2].totalLike}</div>}*/}
                                {/*            <h1 className="tile-title">{data[2].recipe_title}</h1>*/}
                                {/*            <p className="tile-author">by {data[2].first_name} {data[2].last_name}</p>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>}*/}
                                {/*/!*Bottom left small tile*!/*/}
                                {/*{data[3] &&*/}
                                {/*<div className="tile tile-eighth tile-eighth-3">*/}
                                {/*    <Link className="tile-url" to={`/view/recipe/${data[3].recipe_id}`}/>*/}
                                {/*    <picture className="tile-thumbnail">*/}
                                {/*        <source srcSet={""}/>*/}
                                {/*        <img src={data[3].recipe_thumbnail} alt=""/>*/}
                                {/*    </picture>*/}
                                {/*    <div className="tile-overlay">*/}
                                {/*        <div className="tile-details">*/}
                                {/*            {data[3].totalLike !== undefined &&*/}
                                {/*            <div className="tile-likes"><FaRegHeart/> {data[3].totalLike}</div>}*/}
                                {/*            <h1 className="tile-title">{data[3].recipe_title}</h1>*/}
                                {/*            <p className="tile-author">by {data[3].first_name} {data[3].last_name}</p>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>}*/}
                                {/*/!*Bottom right small tile*!/*/}
                                {/*{data[4] &&*/}
                                {/*<div className="tile tile-eighth tile-eighth-4">*/}
                                {/*    <Link className="tile-url" to={`/view/recipe/${data[4].recipe_id}`}/>*/}
                                {/*    <picture className="tile-thumbnail">*/}
                                {/*        <source srcSet={""}/>*/}
                                {/*        <img src={data[4].recipe_thumbnail} alt=""/>*/}
                                {/*    </picture>*/}
                                {/*    <div className="tile-overlay">*/}
                                {/*        <div className="tile-details">*/}
                                {/*            {data[4].totalLike !== undefined &&*/}
                                {/*            <div className="tile-likes"><FaRegHeart/> {data[4].totalLike}</div>}*/}
                                {/*            <h1 className="tile-title">{data[4].recipe_title}</h1>*/}
                                {/*            <p className="tile-author">by {data[4].first_name} {data[4].last_name}</p>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>}*/}
                            </div>
                            : <PanelLoader/>}
                    </div>
                </section>
                <button onClick={executeScroll} className="button-scroll"><span/></button>
                <section className="banner-section banner-shortcuts">
                    <div ref={scrollRef} style={{position: "absolute", top: "-60px", left: "0"}}/>
                    {user ?
                        <>
                            <header className="section-header">
                                <h1>What can we help you with?</h1>
                            </header>
                            <div className="section-content">
                                <Link className="banner-shortcut" to="/post/recipe">
                                    Share a recipe <FaAngleRight/>
                                </Link>
                                <Link className="banner-shortcut" to="/post/blog">
                                    Share a story <FaAngleRight/>
                                </Link>
                                <Link className="banner-shortcut" to="/menu">
                                    Let us suggest this week's menu for you <FaAngleRight/>
                                </Link>
                                <Link className="banner-shortcut" to="/health">
                                    Manage your health profile & food preferences <FaAngleRight/>
                                </Link>
                            </div>
                        </>
                        :
                        <>
                            <header className="section-header">
                                <h1>Sign in to get access to more features!</h1>
                            </header>
                            <div className="section-content">
                                <Link className="banner-shortcut" to={{
                                    pathname: "/login",
                                    state: {background: location}
                                }}>
                                    Sign in
                                </Link>
                                <Link className="banner-shortcut" to={{
                                    pathname: "/register",
                                    state: {background: location}
                                }}>
                                    Create an account
                                </Link>
                            </div>
                        </>
                    }
                </section>
            </div>
            <div className="banner-background" style={{backgroundImage: `url(${bannerBackground})`}}>
                <div className="banner-overlay"/>
            </div>
        </div>
    )
}

export default HomeBanner