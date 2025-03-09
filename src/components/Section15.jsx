import { companyIcon } from "../assets/data";

function Section15(){
    return(
        <div className=" flex p-5 justify-evenly">
            {companyIcon.map((item,index)=>{
                return(
                    <div key={index}>
                        <img src={item} alt="item" className=" inline" />
                    </div>
                )
            })

            }

        </div>
    )
}

export default Section15;