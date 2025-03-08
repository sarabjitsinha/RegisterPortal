import { faq } from "../assets/data";


function Section11(){

    return(
        <div>
            <div className=" flex flex-col items-center">
            <p className=" text-amber-400">Frequently asked questions</p>
            <h3>FAQ</h3>
            </div>
            {faq.map((item,index)=>{
                return(
                    <div key={index} className=" flex justify-between border-[1px] border-slate-300 pl-2 pr-2">
                       <span><img src={item.icon} alt="" className="inline"/>{item.desc}</span>   
                       <div>{item.sign}</div>  
                    </div>
                )
            })

            }

        </div>
    )
}

export default Section11;