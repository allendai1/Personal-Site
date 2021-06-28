import React, { useRef ,useState,useEffect} from 'react'
// import DarkMode from 'src/components/DarkMode'
import Navigation from "../components/Navigation.js"
import Seo from "../components/seo.js"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import emailjs from "emailjs-com";
import {Transition, CSSTransition} from "react-transition-group"

export default function contact() {

    const email = useRef(null);
    const name = useRef(null);
    const subject = useRef(null);
    const message = useRef(null);
    const [inProp, setInProp] = useState(false);
    const [submitted,setSubmitted] = useState(false);
    useEffect(()=>{
        setInProp(true);
    },[])


    function sendEmail(e) {
        e.preventDefault();
        if(email.current.value && message.current.value){
            emailjs.sendForm(process.env.GATSBY_EMAIL_SERVICE_ID, process.env.GATSBY_EMAIL_TEMPLATE_ID, e.target, process.env.GATSBY_EMAIL_USER_ID)
            .then((result) => {
                console.log(result.text);
                setSubmitted(true);

            }, (error) => {
                console.log(error.text);
            });

        }
        
    
        
    }
    return (
        <>
        <Seo title="Contact"/>
        <div className="profile-page">
            <div id="contact-column" className="contact-column">
                <div className="contact-card">
                    <span>Contact me!</span>
                    <form onSubmit={sendEmail} className=" flex flex-col mt-4">
                        <input ref={email} name="email" placeholder="E-mail" type="email"></input>
                        <input ref={name} name="name" placeholder="Name" type="text"></input>
                        <input ref={subject} name="subject" placeholder="Subject" type="text"></input>
                        <textarea ref={message} placeholder="Enter a message" name="message" rows="10" cols="30"></textarea>
                        <button id="submit-button" type="submit" className="submit-button" disabled={submitted ? "t" : ""} >{submitted ? "Submitted" : "Submit"}</button>
                    </form>
                </div>
                {/* <div className="contact-card">You can also contact me on my social medias</div> */}


            </div>

            <div className="navbar-position"><Navigation/></div>


        </div>
        </>
    )
}
