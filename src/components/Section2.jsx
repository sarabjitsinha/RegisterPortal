import oracle from "/oracle.png"
import samsung from "/samsung.png"
import monday from "/monday.png"
import morpheus from "/morpheus.png"

function Section2(){
    return(
        <div>
            <h2 className=" font-semibold text-center">Trusted by over 6000+ startup and freelance business</h2>
            <div className="flex flex-wrap p-4 gap-3">
                <img src={oracle} alt=""  className="inline " />
                <img src={samsung} alt="" className="inline"/>
                <img src={monday} alt="" className="inline"/>
                <img src={morpheus} alt="" className="inline"/>
                
            </div>
        </div>
    )
}
export default Section2;