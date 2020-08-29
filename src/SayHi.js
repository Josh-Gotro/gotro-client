import React from 'react';
import './customCSS/Hi.css'
import { useForm } from "react-hook-form";

const SayHi = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data, r) => {
        alert(`Thank you for your message from ${data.email}`)
        console.log(data)
        const templateId = 'template_5BX9LESm';
        const serviceID = 'joshuagauthreaux_gmail_com';
        sendFeedback(serviceID, templateId, { message_html: data.comment, from_name: data.name, reply_to: data.email })

        fetch(`https://gotro-portfolio.herokuapp.com/messages`, {
        // fetch(`http://localhost:3001/messages`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: data.name,
                    comment: data.comment,
                    email: data.email,
                })
            })
                .then(resp => resp.json())
                .then(data => {
                    console.log(data)
                })
            r.target.reset();
    }

    const sendFeedback = (serviceID, templateId, variables) => {
        window.emailjs.send(
            serviceID, templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
    }


    return (
        <div className="HiContainer">
        <div>
            <h1>say hello</h1>
        </div>
        <div className="HiForm ">
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                <input id="name" name="name" type="text" placeholder="name" ref={register}></input><br></br>

                <input id="email" name="email" type="text" placeholder="email" ref={register({ required: true })}></input>
                        {errors.name && <h2>Please enter an email address. </h2>}<br></br>

                <textarea id="comment" name="comment" placeholder="enter message" ref={register({ required: true })} ></textarea>
                        {errors.name && <p>Please enter a message. </p>}<br></br>

                <button id="hiButton" type="submit" value="Submit" >send</button>
            </label>
        </form> 
        </div>
        </div>
    );
}

export default SayHi;
