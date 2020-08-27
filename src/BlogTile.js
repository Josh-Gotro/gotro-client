import React from 'react';

const BlogTile = (props) => {

    function doSomething(){
        console.log(props.blogData)
        return props.blogData.title
    }

    return (
        <div>
            {doSomething()}
        </div>
    );
}

export default BlogTile;
