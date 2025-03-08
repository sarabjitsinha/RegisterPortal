import Img1 from "/section1_1.svg"
import Img2 from "/section1_2.svg"

function Section1(){

    return(
        <div className="section1 relative">
            <img src={Img1} alt="" className="mt-5"/>
            <section className="flex ">
        <div className="div1">
       <p className=" text-3xl font-semibold "> Your trusted partner
for compliance business needs</p>

An online business compliance platform that helps entrepreneurs and
other individuals with various, registrations, tax filings, and other legal
matters.

        </div>
        <div className="div2">
        <img src={Img2} alt="" className=" h-20 w-30" />
        </div>
        <div className="div3 flex flex-col text-2xl gap-5 right-0 relative">
            <button className=" bg-blue-400 rounded-l-xl ">Annual compliance</button>
            <button className=" bg-blue-400 rounded-l-xl ">Payroll Services</button>
            <button className=" bg-blue-400 rounded-l-xl ">Company formation</button>
            <button className=" bg-blue-400 rounded-l-xl ">Tax compliance</button>
        </div>
        </section>
        </div>
        
    )
}

export default Section1;