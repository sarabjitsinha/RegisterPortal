import Apps from "/Appstore.png"
import Gools from "/Googlestore.png"
import phone from "/Phone.svg"
import phone1 from "/Phone-1.svg"

function Section12(){

    return(
        <div className="phone flex overflow-y-hidden h-[300px] mt-2 bg-blue-600 w-auto p-3 relative">
            <div className="flex flex-col">
            <h1 className=" text-2xl font-bold text-white">Manage Your Services by your Mobile Phone</h1>
            <br />
            <h2>Download our app to manage and track your services. Our appa enables you to stay in touch 
                with our experts and aids you in tracking your progress
            </h2>
            <br />
            <p>Get the App</p>
            <br />
            <div>
            <img src={Apps} alt="apps" className=" h-10 w-20 inline-flex" />
            <img src={Gools} alt="googles" className=" h-10 w-20 inline-flex" />
            </div>
            </div>
            
            <div className="phone1 ">
                <br /><br /><br />
                <img src={phone} alt="p" />
            </div>
            
            <div className="phone2 relative">
                    <img src={phone1} alt="p1" className="flex" />
            </div>
        </div>
    )
}

export default Section12;