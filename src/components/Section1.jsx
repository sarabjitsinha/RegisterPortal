import Img1 from "/section1_1.svg";
import Img2 from "/sec2.2.svg";
import Img3 from "/sec2.3.svg";
import Img4 from "/sec2.1.png";
import client from "/Client.svg"
import fin from "/Fin.svg"

function Section1() {
  return (
    <div className=" relative">
      <img src={Img1} alt="img1" className="mt-5" />
      <section className="flex section1">
        <div className="div1">
          <br />
          <p className=" text-3xl font-semibold ">
            {" "}
            Your trusted partner for compliance business needs
          </p>
          <br />
          <p>
            An online business compliance platform that helps entrepreneurs and
            other individuals with various, registrations, tax filings, and
            other legal matters.
          </p>
          <br />
          <br />

          <div className="sec1trust flex gap-5 p-4">
          <div className=" flex flex-col">
            <img src={Img4} alt="img4" className="h-auto w-6" />
            <div className=" flex">
              <h2 className=" font-bold text-amber-500">4.5+</h2>
              <h3>Customer Rating</h3>
            </div>            
          </div>

          <div className=" flex flex-col">
            <img src={client} alt="img4" className="h-auto w-6" />
            <div className=" flex">
              <h2 className=" font-bold text-amber-500">20,000+</h2>
              <h3>Clients</h3>
            </div>            
          </div>

          <div className=" flex flex-col">
            <img src={fin} alt="img4" className="h-auto w-6" />
            <div className=" flex">
              <h2 className=" font-bold text-amber-500">99.8%</h2>
              <h3>Financial stability</h3>
            </div>            
          </div>

          </div>

          <br />
          <br />
          <div className=" flex p-3">
            <button className=" bg-blue-800 rounded-2xl text-white">
              
              Talk to an expert
            </button>
            <p className=" p-2">See how it works</p>
          </div>
        </div>
        <div className="div2">
          <img src={Img2} alt="img2" className=" flex" />
        </div>
        <div className="div3 flex flex-col text-2xl gap-5 right-0 relative">
          <button className=" bg-blue-400 rounded-l-xl ">
            Annual compliance
          </button>
          <button className=" bg-blue-400 rounded-l-xl ">
            Payroll Services
          </button>
          <button className=" bg-blue-400 rounded-l-xl ">
            Company formation
          </button>
          <button className=" bg-blue-400 rounded-l-xl ">Tax compliance</button>
          <img src={Img3} alt="img3" />
        </div>
      </section>
    </div>
  );
}

export default Section1;
