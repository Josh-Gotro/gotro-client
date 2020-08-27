import React, { useState, useEffect } from 'react';
import './customCSS/Blog.css';


const Blog = () => {
    const mediumUrl = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40joshuagauthreaux";
    const [myBlog, setMyBlog] = useState([]);
    const abortController = new AbortController();
    
    useEffect(() =>{
        fetch(mediumUrl)
        .then(res => res.json())
        .then( data => {
            setMyBlog(data)
        return function cleanup() {
            abortController.abort()
        }
        })
    },[mediumUrl]);

    function displayBlogs() {
        if(myBlog.items){ 
            return myBlog.items.map(blog => {
                if(blog.categories.length > 0){
                return <h3>{blog.title}</h3>
                    console.log(blog.title)
                }
            })
        }
    }
        
    return (
        <div>
            {displayBlogs()}
        </div>
    );
}

export default Blog;
