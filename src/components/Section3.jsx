import sym from "/Symbol-6.svg"
import { ourServices } from "../assets/data";

function Section3(){

    return(
        <div className="mt-1">
            <p className=" text-xl text-amber-500 text-center"> WELCOME TO REGISTERKARO. IN</p>
            <h1 className=" text-4xl font-bold text-center">Explore our services</h1>
            <br />
            <section className="flex flex-wrap ">
                {ourServices.map((item,index)=>{
                    return(
        <div key={index}>
            <div className=" w-96 p-10 border-[0.5px] border-slate-200">
            <img src={item.icon} alt="icon" className=" justify-self-center"/>
            <br />
            <h1 className=" text-xl font-bold">{item.heading}</h1>
            <br />
            <p>{item.detail}</p>
            <br />
        <button className="bg-blue-100 p-2">Learn More  <img src={sym} alt="sym" className="inline bg-black"/></button>
        </div>
        </div> )})}
        </section>
        <br />
        <button className="bg-blue-700 p-2 text-white flex justify-self-center">See All Services  <img src={sym} alt="sym" className="inline bg-black"/></button>
        </div>
    )
}

export default Section3;