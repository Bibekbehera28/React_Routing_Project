import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <>
        {/* <header> */}
            {/* <a href="#" style={{textDecoration: 'none'}}>Logo</a> */}
            <div >
           <Link to ="/" style={{textDecoration: 'none'}}><li>Home</li></Link>
           <Link to ="/about" style={{textDecoration: 'none'}}><li>About</li></Link>
           <Link to ="/contact" style={{textDecoration: 'none'}}><li>Contact</li></Link>
            </div>
        {/* </header> */}
        {/* <section><h1>Home page</h1></section> */}
        </>      
    );
};
export default Header;