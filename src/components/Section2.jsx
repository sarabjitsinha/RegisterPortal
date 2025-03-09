import oracle from "/oracle.png"
import samsung from "/samsung.png"
import monday from "/monday.png"
import morpheus from "/morpheus.png"

function Section2(){
    return(
        <div>
            <h2 className=" font-semibold text-center">Trusted by over 6000+ startup and freelance business</h2>
            <div className="flex flex-wrap p-4 gap-3 sec2 justify-evenly">
                <img src={oracle} alt="oracle"  className="inline-flex " />
                <img src={samsung} alt="samsung" className="inline- flex"/>
                <img src={monday} alt="monday" className="inline-flex"/>
                <img src={morpheus} alt="morphens" className="inline-flex"/>
                
            </div>
        </div>
    )
}
export default Section2;