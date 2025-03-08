import { roundLogo } from "../assets/data";

function Section7(){

    return(
        <div className=" flex flex-wrap ">
            <div className=" flex flex-wrap justify-center ">
            <p className=" text-4xl font-semibold w-[70%] text-center ">Our Happy Clients</p>
            <p className="text-2xl w-[70%] ">Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resourceleveling
            customer service for state of the art customer service.</p>
            </div>
            <div className=" flex flex-wrap gap-3">
            {roundLogo.map((item,index)=>{
                return(
                    <div>
                    {(index%2==0) ?
                    <img src={item} alt="" className="inline" key={index} /> :
                    <img src={item} alt="" className="inline top-15 relative" key={index} />}
                    </div>
                )

            })}
</div>
        </div>
    )
}

export default Section7;