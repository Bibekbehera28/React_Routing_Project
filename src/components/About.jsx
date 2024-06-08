import { useNavigate } from "react-router-dom";


const About = () => {
    const Navigate = useNavigate();
    const goToContact = () => {
        Navigate("/contact");
    }
    return (
        <>
        <div id="about">
            <h1 style={{color:"green"}}>About us</h1>
            <p style={{color:"blue"}}>Full Stack Team_10</p>
            <p>
            CHITTIMALLA PUJITHA:SR UNIVERSITY
            <br/>
            Avinash Dasari : Usha Rama College of Engineering And Technology
            <br />
            Sudham Navyasri:Sumathi Reddy institute of technology for women
            <br />
            Bhavashya:Sumathi Reddy institute of technology for women
            <br />
            Alli Sreeja:Sumathi Reddy institute of technology for women
            <br />
            Bibek behera : Institue Of Aeronautical Engineering
            <br />
            P Vaishnavi: Institue Of Aeronautical Engineering
            <br />
            AKKATI UMESHCHANDRA:Institue Of Aeronautical Engineering

            </p>
            <button onClick={() =>goToContact()}>Contact us</button>
            <br />
            <button onClick={()=> {
            Navigate(-1);}
            }>Go Back</button>
        </div>
        </>
    );
};

export default About;