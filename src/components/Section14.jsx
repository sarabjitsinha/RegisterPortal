import altxt from "/Align to Text.svg"

function Section14(){
    return(
        <div className="divsec flex flex-col items-center p-10 gap-5 text-white mt-2">
            <p>1% OF THE INDUSTRY</p>
            <h1>Welcome To Your New Digital Reality. Now</h1>
            <div className=" border-0.5 border-slate-600">
                <input type="text" placeholder="Enter search" />
                <span className=" bg-amber-400 rounded-4xl">Search</span></div>
            <span><img src={altxt} alt="" className=" inline" />Instant Results 
            <img src={altxt} alt="" className=" inline-flex" />User-Friendly Interface
            <img src={altxt} alt="" className=" inline-flex" />Personalized Customization
            </span>
        </div>
    )
}

export default Section14;