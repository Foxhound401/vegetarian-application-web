import React, {useEffect} from "react";
import {apiUrl} from "../../../helpers/Variables";
import Panel from "../../commons/elements/containers/Panel";
import ArticleCard from "../../commons/elements/containers/ArticleCard";
import {PanelLoader} from "../../commons/elements/loaders/Loader";
import {PanelEmp} from "../../commons/elements/loaders/AlertEmpty";
import {PanelErr} from "../../commons/elements/loaders/AlertError";
import LocalizedStrings from "react-localization";

const PostedBlogs = ({user, data, isLoading, isError, fetchData}) => {
    // Localizations
    let strings = new LocalizedStrings({
        en: {
            blogHeader: "Blogs",
            blogMessageHeader: "Your published blogs and stories.",
            blogMessageEmpty: "It seems you haven't posted anything yet.",
        },
        vi: {
            blogHeader: "Bài viết",
            blogMessageHeader: "Bài viết mà bạn đã đăng",
            blogMessageEmpty: "Có vẻ như bạn chưa đăng bài viết nào",
        }
    });

    const api = `${apiUrl}/blogs/getallbyuserID/${user.id}?page=1&limit=100`;
    // Executes fetch once on page load
    useEffect(() => {
        fetchData(api);
    }, [user]);

    return (
        <section>
            <div className="section-content">
                <h1>{strings.blogHeader}</h1>
                <p>{strings.blogMessageHeader}</p>
                <Panel filler="card-full">
                    {!isLoading ? <>
                        {!isError ? <>
                            {data && data.length > 0 ? <>
                                {data.map(item => (
                                    <ArticleCard className="card-full"
                                                 key={item.blog_id}
                                                 id={item.blog_id}
                                                 type="blog"
                                                 title={item.blog_title}
                                                 thumbnail={item.blog_thumbnail}
                                                 subtitle={item.blog_subtitle}
                                                 userId={item.user_id}
                                                 firstName={item.first_name}
                                                 lastName={item.last_name}
                                                 time={item.time_created}
                                                 isFavorite={item.is_like}
                                                 totalLikes={item.totalLike}
                                                 status={item.status}/>))}
                            </> : <PanelEmp message={strings.blogMessageEmpty}/>}
                        </> : <PanelErr reload={fetchData} api={api}/>}
                    </> : <PanelLoader/>}
                </Panel>
            </div>
        </section>
    )
}

export default PostedBlogs;