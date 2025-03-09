import { blog } from "../assets/data";

function Section9(){
    return(
        <div>
        <div className=" flex flex-wrap p-5">
            {blog.map((item,index)=>{
                return(
                    <div key={index} className=" basis-[30%] pl-5 m-auto">
                        <img src={item.cover_image} alt="cover" />
                        <br />
                        <p className=" font-medium">{item.author}</p>
                        <br />
                        <p className=" text-2xl font-bold">{item.heading}</p>
                        <br />
                        <p>{item.stext}</p>
                        <br />
                        <p><span className=" text-green-900 font-semibold p-2">{item.text1}</span>  
                        <span className=" text-blue-900 font-semibold p-2">{item.text2}</span>
                          <span className=" text-pink-900 font-semibold">{item.text3}</span>
                          </p>
                    </div>
                )
            })

            }
            </div>
            <button className=" bg-blue-800 flex justify-self-center text-2xl rounded-4xl text-white">Show More Blogs</button>
        </div>
    )
}

export default Section9;