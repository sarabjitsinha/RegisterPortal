import "../App.css"
import logo from "/logo_logo_1.svg"

function Header(){
    return(
        <div className="header">
            <img src={logo} alt="logo" />
            <span>Home</span>
            <label htmlFor="service"></label>
            <select name="service" id="service" >
            <option value="ourservice">OurServices</option>
            <option value="serviceA">Service-A</option>
            <option value="serviceB">Service-B</option>
            </select>
            <span>Blog</span>
            <span>Contact Us</span>
            <span>About Us</span>
            <button className="btnel">Talk to An expert</button>
        </div>

    )
}

export default Header;