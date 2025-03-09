import punct from "/punct.svg";
import star from "/Star.svg";
import uimage1 from "/sec10uimage1.png";

function Section10() {
  return (
    <div className=" bg-blue-700 p-3 mt-1 w-auto h-auto" >
      <h2 className=" font-extrabold text-2xl p-2">What People Say about us</h2>
      <div className=" flex border-0.5 p-4 gap-2 overflow-x-hidden w-auto h-auto">
        <div className=" basis-[30%] bg-white rounded-md p-2 ">
          <div className=" flex justify-between p-2">
            <img src={punct} alt="pn" />
            <img src={star} alt="st" />
          </div>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat aute irure sint amet
            occaecat cupidatat non proident ea commodo consequat aute irure sint
            amet occaecat cupidatat non proident
          </p>
          <div className=" flex w-auto sec10">
            <img src={uimage1} alt="ui" className=" pt-3" />
            <div>
              <p className=" font-bold ">Chris</p>
              <p>President and CEO, PrintReach,USA</p>
            </div>
          </div>
        </div>

        <div className=" basis-[60%] bg-white rounded-md p-3 ml-12 w-auto">
          <div className=" flex justify-between p-2 ">
            <img src={punct} alt="pn" />
            <img src={star} alt="st" />
          </div>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat aute irure sint amet
            occaecat cupidatat non proident ea commodo consequat aute irure sint
            amet occaecat cupidatat non proident
          </p>
          <div className=" flex w-auto sec10">
            <img src={uimage1} alt="ui" className="pt-3" />
            <div>
              <p className=" font-bold ">Chris</p>
              <p>President and CEO, PrintReach,USA</p>
            </div>
          </div>
        </div>

        <div className=" basis-[30%] relative right-[-60px]  bg-white rounded-md p-2">
          <div className=" flex justify-between p-2">
            <img src={punct} alt="pn" />
            <img src={star} alt="st" />
          </div>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat aute irure sint amet
            occaecat cupidatat non proident ea commodo consequat aute irure sint
            amet occaecat cupidatat non proident
          </p>
          <div className=" flex">
            <img src={uimage1} alt="ui" className=" pt-3" />
            <div>
              <p className=" font-bold ">Chris</p>
              <p>President and CEO, PrintReach,USA</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Section10;
