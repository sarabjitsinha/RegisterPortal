import fb from "/Fb.svg"
import insta from "/Insta.svg"
import twitter from "/Twiter.svg"
import pintrest from "/Pintrest.svg"
import symbol from "/Symbol.svg"
import symbol1 from "/Symbol-1.svg"

function Banner(){

    return(
        <div className=" bg-blue-400 flex justify-center gap-4 w-[99%] ">
        <div className="banner h-auto flex gap-4">
            <div className=" flex">
            <img src={symbol} alt="logo" />
            <span>www.registerkaro.in</span>
            </div>
            <div className=" flex">
            <img src={symbol1} alt="logo" />
            <span>+918447746183</span>
            </div>
            <div className=" flex h-5 w-6 gap-4">
            <img src={fb} alt="fb" />
            <img src={insta} alt="insta" />
            <img src={twitter} alt="twitter" />
            <img src={pintrest} alt="pintrest" />
            </div>
        </div>
        </div>
    )
}

export default Banner;