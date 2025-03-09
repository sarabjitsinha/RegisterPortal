import sym1 from "/Symbol-2.svg"
import sym2 from "/Symbol-3.svg"
import sym3 from "/Symbol-4.svg"
import sym4 from "/Symbol-5.svg"


function Section5(){

    return (
        <div className="flex sec5">
            <section className="flex flex-wrap basis-[80%] relative gap-5 p-3">
            <article className="flex flex-wrap gap-5">
            <p className=" text-2xl text-amber-600 ">WHY REGISTERKARO. IN</p>
           <p className=" text-4xl font-extrabold"> Why Choose Register Karo</p>
            <p>It is with consistent services and results that build trust with the people and that in
             turn help us to serve the business better.
            </p>
            </article>
            <article className="grtst flex flex-wrap basis-[70%] relative left-[30%] gap-5 justify-center bg-blue-300 rounded-4xl p-3">
               <img src={sym1} alt=""  />
                <h1 className=" text-3xl font-bold">Guaranteed Satisfaction</h1>
                <p>We ensure that you stay 100% satisfied with our offered services</p>
                
         </article>
         </section>
         <section className=" flex gap-5 sec5-1">
            <div className="flex flex-wrap gap-2">
         <article className="  p-5 bg-amber-200 basis-[70%] rounded-4xl">
            <img src={sym2} alt="" className=" justify-self-center"/>
            <h1 className=" text-3xl font-bold">Confidential & Safe</h1>
            <p>All your private information is safe with us</p>
         </article>
         <article className=" p-5 bg-pink-200 basis-[70%] rounded-4xl">
         <img src={sym3} alt="" className=" justify-self-center"/>
            <h1 className=" text-3xl font-bold">Expert CA/CS Assistance</h1>
            <p>Prompt support from our in-house expert professionals</p>
         </article>
         </div>
         <div className=" flex flex-wrap gap-3">
         <article className="p-5 bg-purple-400 rounded-4xl basis-[70%]">
         <img src={sym4} alt="" className=" justify-self-center"/>
            <h1 className=" text-3xl font-bold">No Hidden Fee</h1>
            <p>Everything is put before you with no hidden charges or conditions</p>
         </article>
         <article className="p-5 bg-green-200 rounded-4xl basis-[70%]">
         <img src={sym2} alt="" className=" justify-self-center"/>
            <h1 className=" text-3xl font-bold">Confidential & Safe</h1>
            <p>All your private information is safe with us</p>
            </article> 
            </div>  
            </section>     
        </div>
    )
}

export default Section5;