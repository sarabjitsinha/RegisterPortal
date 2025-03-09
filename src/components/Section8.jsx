import cont from "/contact-form 1.svg"
import Vect from "/Vector (2).svg"
import cont1 from "/contact-form 2.svg"
import Vect1 from "/Vector (3).svg"

function Section8(){
    return(
        <div className=" flex w-auto bg-amber-500 mt-16 h-auto justify-evenly sec8">
            <div>
            <img src={cont} alt="cont" className="inline bg-green-950 rounded-full w-8 "/>
            <span>Make Online Payment</span>
            </div>
            <div>
            <img src={Vect} alt="vect" className="inline bg-pink-950 rounded-full w-8 "/>
            <span>Fill Up application Form</span>
            </div>
            <div>
            <img src={cont1} alt="cont1" className="inline bg-amber-950 rounded-full w-8 "/>
            <span>Executive will Process Application</span>
            </div>
            <div>
            <img src={Vect1} alt="vect1" className="inline bg-gray-950 rounded-full w-8 "/>
            <span>Get confirm Mail</span>
            </div>
        </div>
    )
}

export default Section8;