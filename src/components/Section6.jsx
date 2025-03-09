
import di1 from "/Display Icon-24.svg"
import di2 from "/Display Icon-25.svg"
import fbbt from "/Fbdb.svg";

function Section6(){
    return(
        <div className=" flex flex-wrap bg-blue-900">
            <div className=" flex flex-wrap basis-[50%] p-10">
                <h1 className=" text-3xl font-bold">Our Video Introductions</h1>
                <p>Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
                vulputate pellentesque a diam tincidunt apis dui.</p>

                <div className=" flex flex-wrap">
                <img src={di1} alt="" />
            
                <p className="flex items-center text-xl font-medium p-2">Explore ideas together</p>
                <p>
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
                </p>
                </div>

                <img src={di2} alt="" />
                <p className=" flex items-center text-xl font-medium p-2">Bring those ideas to life</p>
                <p>Engage audience segments and finally create actionable insights.
                    Amplify vertical integration.
                </p>
            </div>
            <div className=" flex relative basis-[50%] p-5">
                <img src={fbbt} alt="" />
            </div>

        </div>
    )
}

export default Section6;