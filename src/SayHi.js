import React from 'react';
import './customCSS/Hi.css'

const SayHi = () => {
    return (
        <div className="HiContainer">
        <div id="hello">
            <h1>say hello</h1>
        </div>
        <div className="HiForm ">
        <form>
            <label>
                <input id="name" name="name" type="text" placeholder="name"></input><br></br>
                <input id="email" name="email" type="text" placeholder="email"></input><br></br>
                <textarea id="message" name="message" placeholder="enter message" ></textarea><br></br>
                <button id="hiButton" type="submit" value="Submit" >send</button>
            </label>
        </form>
        </div>
        </div>
    );
}

export default SayHi;
