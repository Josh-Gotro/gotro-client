import React, { useEffect }from 'react';
import './customCSS/Hi.css'
import { useForm } from "react-hook-form";

const SayHi = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data, r) => {
        alert(`Thank you for your message from ${data.email}`)
        console.log(data)

            fetch(`http://localhost:3001/messages`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: data.name,
                    comment: data.message,
                    email: data.email,
                })
            })
                .then(resp => resp.json())
                .then(data => {
                    console.log(data)
                })
            r.target.reset();
    }


    return (
        <div className="HiContainer">
        <div id="hello">
            <h1>say hello</h1>
        </div>
        <div className="HiForm ">
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                <input id="name" name="name" type="text" placeholder="name" ref={register}></input><br></br>
                        <input id="email" name="email" type="text" placeholder="email" ref={register({ required: true })}></input><br></br>
                        <textarea id="message" name="message" placeholder="enter message" ref={register({ required: true })} ></textarea><br></br>
                <button id="hiButton" type="submit" value="Submit" >send</button>
            </label>
        </form>
        </div>
        </div>
    );
}

export default SayHi;
