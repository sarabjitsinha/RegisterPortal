import sym from "/Symbol-6.svg"
import frame from "/Frame 394.svg"

function Section4(){

    return(
        <div className=" flex flex-wrap pb-5" >
            <div className=" basis-[50%] p-4">
            <h1 className=" text-amber-500">WELCOME TO REGISTERKARO. IN </h1>
            <br />
           <h1 className=" text-2xl font-bold"> About <span className=" text-2xl text-amber-600 font-bold">Register Karo</span></h1>
            <br /><br />
            <p>We have been using Intelegencia as our DevOps vendor for our field service
                applications over the last couple of years and I’m extremely pleased with

                their performance, ability to execute, and willingness to adapt in our ever changing
                environment. Perry is an outstanding leader who is fanatical about

                customer satisfaction. He has built a solid team which has consistently delivered
                on projects thereby exceeding everyone’s expectations.
                <br /> <br />
                I would strongly recommend their services to any organization that is looking for
                solid, reliable, and predictable outcomes.</p>
                <br /><br />
                <button className="bg-blue-900 p-2">Learn More  <img src={sym} alt="" className="inline"/></button>
                
                </div>
            <div>
                <img src={frame} alt="" />
            </div>

        </div>
    )
}

export default Section4;