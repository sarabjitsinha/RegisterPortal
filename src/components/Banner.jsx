import fb from "/Fb.svg"
import insta from "/Insta.svg"
import twitter from "/Twiter.svg"
import pintrest from "/Pintrest.svg"
import symbol from "/Symbol.svg"
import symbol1 from "/Symbol-1.svg"

function Banner(){

    return(
        <div className=" bg-blue-500 flex justify-center gap-4 w-[99%] ">
        <div className="banner h-auto flex gap-4">
            <div className=" flex">
            <img src={symbol} alt="" />
            <span>www.registerkaro.in</span>
            </div>
            <div className=" flex">
            <img src={symbol1} alt="" />
            <span>+918447746183</span>
            </div>
            <div className=" flex h-5 w-6 gap-4">
            <img src={fb} alt="" />
            <img src={insta} alt="" />
            <img src={twitter} alt="" />
            <img src={pintrest} alt="" />
            </div>
        </div>
        </div>
    )
}

export default Banner;