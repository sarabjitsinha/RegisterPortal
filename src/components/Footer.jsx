import fb from "/Fb.svg";
import insta from "/Insta.svg";
import twitter from "/Twiter.svg";
import pintrest from "/Pintrest.svg";

function Footer() {
  return (
    <div className=" bg-blue-900 w-auto text-white">
      <div className="footer flex justify-evenly">
        <div className=" flex flex-wrap basis-[20%]">
          <p>
            Design outstanding interfaces with advanced Figma features in a
            matter of minutes
          </p>
          <span>
            <img src={fb} alt="fb" className="inline" />
            <img src={insta} alt="insta" className="inline" />
            <img src={twitter} alt="twitter" className="inline" />
            <img src={pintrest} alt="pintrest" className="inline" />
          </span>
        </div>
        <div>
          <h2 className=" text-amber-400">START A BUSINESS</h2>
          <br />
          <ul itemType="none">
            <li>Features</li>
            <li>Solution</li>
            <li>Integrations</li>
            <li>Enterprise</li>
            <li>Solutions</li>
          </ul>
        </div>
        <div>
          <h2 className=" text-amber-400">GOVERNMENT REGISTRATION</h2>
          <br />
          <ul itemType="none">
            <li>Partners</li>
            <li>Community</li>
            <li>Developers</li>
            <li>App</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h2 className=" text-amber-400">COMPLIANCE & TAX</h2>
          <br />
          <ul itemType="none">
            <li>Channel</li>
            <li>Scale</li>
            <li>Watch the demo</li>
            <li>Our competition</li>
          </ul>
        </div>
        <div>
          <h2 className=" text-amber-400">BIS & CDSO</h2>
          <br />
          <ul itemType="none">
            <li>About Us</li>
            <li>News</li>
            <li>Leadership</li>
            <li>Media Kit</li>
          </ul>
        </div>
      </div>
      <p align="center">@ 2024 Registerkaro. All rights reserved</p>
    </div>
  );
}

export default Footer;
