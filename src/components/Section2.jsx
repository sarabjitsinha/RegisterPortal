import oracle from "/oracle.png"
import samsung from "/samsung.png"
import monday from "/monday.png"
import morpheus from "/morpheus.png"

function Section2(){
    return(
        <div>
            <h2 className=" font-semibold text-center">Trusted by over 6000+ startup and freelance business</h2>
            <div className="flex flex-wrap p-4 gap-3 sec2">
                <img src={oracle} alt=""  className="inline-flex " />
                <img src={samsung} alt="" className="inline- flex"/>
                <img src={monday} alt="" className="inline-flex"/>
                <img src={morpheus} alt="" className="inline-flex"/>
                
            </div>
        </div>
    )
}
export default Section2;