import "../App.css"
import logo from "/logo_logo_1.svg"

function Header(){
    return(
        <div className="header">
            <img src={logo} alt="" />
            <span>Home</span>
            <select name="" id="">
            <option value="">Our Services</option>
            <option value="">A</option>
            <option value="">B</option>
            </select>
            <span>Blog</span>
            <span>Contact Us</span>
            <span>About Us</span>
            <button className="btnel">Talk to An expert</button>
        </div>

    )
}

export default Header;