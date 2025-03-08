import vect from "/Vector (4).svg"
import yt from "/youtube-logo.svg"
import di1 from "/Display Icon-24.svg"
import di2 from "/Display Icon-25.svg"
function Section6(){
    return(
        <div className=" flex flex-wrap bg-blue-900">
            <div className=" flex flex-wrap basis-[50%] p-10">
                <h1 className=" text-3xl font-bold">Our Video Introductions</h1>
                <p>Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
                vulputate pellentesque a diam tincidunt apis dui.</p>
                <img src={di1} alt="" />
                <p>
                Explore ideas together</p>
                <p>
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
                </p>
                <img src={di2} alt="" />
                <p>
                Bring those ideas to life</p>
                <p>Engage audience segments and finally create actionable insights.
                    Amplify vertical integration.
                </p>
            </div>
            <div className=" flex relative basis-[50%] p-5">
        <img src={vect} alt="" />
        <img src={yt} alt="" className="flex top-[35%] right-[50%] left-[30%] absolute z-1"/>
            </div>

        </div>
    )
}

export default Section6;