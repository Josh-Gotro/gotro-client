import React from 'react';
import './customCSS/Blog.css';


const BlogTile = (props) => {
    const { title, link, thumbnail, content, pubDate } = props.blogData;

    function cleanTitle(checkTitle) {
        checkTitle = checkTitle.replace("amp;", "");
        return checkTitle
    }

    function truncateText(text, start, len){
        return text.length > len ? text.slice(start, len) : text;
    }

    function toText(block){
        let tag = document.createElement('div');
        tag.innerHTML = block;
        block = tag.innerText;
        return block
    }

    function convertDate(date){
        let dateArray = date.slice(0, 10).split("-")
        let year = dateArray.shift();
        dateArray.push(year)
        return `Published: ${dateArray.join("/")}`;  
    }

    function blogPost(){
        return      <a href={`${link}`}>
                    <div className="ImageContainer">
                        <img src={`${thumbnail}`} className="Image"></img>
                    </div>
                    <div className="TDContainer">
                        {/* <h3>{cleanTitle(title)}</h3> */}
                        <h3>{truncateText(cleanTitle(title), 0, 60)}</h3><br/>
                        <p>{truncateText(toText(content), 48, 300) + "..."}</p><br />
                        <h4>{convertDate(pubDate)}</h4>
                    </div>
                    </a> 
                
    }




    return (
        
        <div className="PostContainer">
            {blogPost()}
        </div>

    );
}

export default BlogTile;