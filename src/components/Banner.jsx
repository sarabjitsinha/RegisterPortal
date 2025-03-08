import fb from "/Fb.svg"
import insta from "/Insta.svg"
import twitter from "/Twiter.svg"
import pintrest from "/Pintrest.svg"
import symbol from "/Symbol.svg"
import symbol1 from "/Symbol-1.svg"

function Banner(){

    return(
        <div className=" bg-blue-500 flex justify-end">
        <div className="banner h-auto flex gap-4">
            <img src={symbol} alt="" />
            <span>www.registerkaro.in</span>
            <img src={symbol1} alt="" />
            <span>+918447746183</span>
            <img src={fb} alt="" />
            <img src={insta} alt="" />
            <img src={twitter} alt="" />
            <img src={pintrest} alt="" />

        </div>
        </div>
    )
}

export default Banner;