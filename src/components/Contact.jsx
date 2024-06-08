import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const Navigate = useNavigate();
    const goToHome= () => {
        Navigate("/");
    }
    const goBack=() => {
        Navigate(-1);
    }
    return (
        <>
        <form id="contact">
        <h1 style={{color:"green"}}>Contact us!</h1>
            <label for="fname">First Name:</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
            <br />
            <br />
            <label for="lname">Last Name:</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
            <br />
            <br />
            <label for="country">Country</label>
            <select id="country" name="country">
                <option value="australia">Australia</option>
                <option value="canada">india</option>
                <option value="usa">USA</option>
            </select>
            <br />
            <br />
            <label for="subject">Subject</label>
            <br />
            <textarea id="subject" name="subject" placeholder="Write something.."style={{height:"170px"}}></textarea>
            <br />
            <br />
            <input id="sub" type="submit" value="Submit"></input>
            <br />
        <button onClick={() => goToHome()}>Home</button>
        <br />
        <button onClick={() => goBack()}>Go Back</button>
        </form>
        <br />
        </>
    );
};

export default Contact;