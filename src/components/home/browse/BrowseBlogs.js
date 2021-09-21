import React, {useEffect, useState} from "react";
import Thread from "../../commons/elements/Thread";

const BrowseBlogs = () => {
    const api = "http://14.161.47.36:8080/hiepphat-0.0.1-SNAPSHOT/api/blogs/getall?page=1&limit=100";
    const [blogs, setBlogs] = useState([]);

    // Fetches recipes data
    const getAllRecipes = async () => {
        const response = await fetch(api)
        const result = await response.json();
        return result;
    }

    // Executes fetch once on page load
    useEffect(async () => {
        const blogs = await getAllRecipes();
        console.log(blogs);
        setBlogs(blogs.listResult);
    }, []);

    return (
        <main>
            <section>
                <div className="section-content">
                    <h1>Blogs</h1>
                    <i>Stories, thoughts, discussions and more.</i>
                </div>
                <div className="thread-list">
                    {blogs && blogs.map(blog => (
                        <Thread id={blog.blog_id}
                                type="blog"
                                title={blog.blog_title}
                                thumbnail={blog.blog_thumbnail}
                                excerpt={blog.blog_content.substring(0, 150)}
                                first_name={blog.first_name}
                                last_name={blog.last_name}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default BrowseBlogs;