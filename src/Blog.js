import React, { useState, useEffect } from 'react';
import './customCSS/Blog.css';
import BlogTile from './BlogTile';


const Blog = () => {
    const mediumUrl = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40joshuagauthreaux";
    const [myBlog, setMyBlog] = useState([]);
    const abortController = new AbortController();

    useEffect(() => {
        fetch(mediumUrl)
            .then(res => res.json())
            .then(data => {
                setMyBlog(data)
                return function cleanup() {
                    abortController.abort()
                }
            })
    }, [mediumUrl]);

    function displayBlogs() {
            return myBlog.items && myBlog.items.map(blog => {
                if (blog.categories.length > 0) {
                    return <BlogTile key={blog.pubDate} blogData={blog} />
                }
            })
    }

    return (
        <>
            {/* <h1>B<br />L<br />O<br />G</h1> */}
            <div className="Blogs">
                {displayBlogs()}
            </div>
        </>
    );
}

export default Blog;
