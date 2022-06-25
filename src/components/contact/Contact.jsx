import "./contact.css";
import Phone from "../../img/phone-call.png";
import Mail from "../../img/envelope.png";
import Address from "../../img/address.png";
import Contact1 from "../../img/contact.svg";
import {useContext, useRef, useState} from "react";
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../context";
 
const Contact = () => {

    const formRef = useRef();
    const [done, setDone] = useState(false);

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) =>{
        e.preventDefault();

        emailjs.sendForm('service_8zabe8p', 'template_86t575e', formRef.current, 'user_Q5nEet7eiNxNMKB2iACJX')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });

    }

    return (
        <div className = "c">

            <div className="c-bg"></div>

            <div className="c-wrapper">

                <div className="c-left">

                    <h1 className = "c-title">Let's discuss your project</h1>

                    <div className="c-info">

                        <div className="c-info-item">
                            <img src= {Phone} alt="" className="c-icon" />
                            +994552677274
                        </div>

                        <div className="c-info-item">
                            <img src= {Mail} alt="" className="c-icon" />
                            kamil.ismayilzade.2016@mail.ru
                        </div>

                        <div className="c-info-item">
                            <img src= {Address} alt="" className="c-icon" />
                            Baku, Ganja Avenue 34
                        </div>

                    </div>

                    <div className="c-image">
                            <img src= {Contact1} alt="" className = "c-img" />
                        </div>

                </div>

                <div className="c-right">

                    <p className = "c-desc">
                        <b>Lorem ipsum dolor sit amet.</b>Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Esse possimus consequuntur voluptatibus corrupti fugit aut obcaecati suscipit
                        dolorem alias error?
                    </p>

                    <form ref = {formRef} onSubmit = {handleSubmit} >
                        <input style = {{backgroundColor: darkMode && "#34495E"}} type="text" placeholder = "Name" name = "user_name" />
                        <input style = {{backgroundColor: darkMode && "#34495E"}} type="text" placeholder = "Subject" name = "user_subject" />
                        <input style = {{backgroundColor: darkMode && "#34495E"}} type="text" placeholder = "Email" name = "user_email" />
                        <textarea style = {{backgroundColor: darkMode && "#34495E"}} rows = "10" placeholder = "Message" name = "message" />
                        <button>Submit</button>
                        {done && "Thank you buddy.."}
                    </form>

                </div>

            </div>

        </div>
    )
}

export default Contact
