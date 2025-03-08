import { blog } from "../assets/data";

function Section9(){
    return(
        <div>
        <div className=" flex flex-wrap p-5">
            {blog.map((item,index)=>{
                return(
                    <div key={index} className=" basis-[30%] pl-5 m-auto">
                        <img src={item.cover_image}  />
                        <p>{item.author}</p>
                        <p >{item.heading}</p>
                        <p>{item.stext}</p>
                        <p>{item.text1}  {item.text2}  {item.text3}</p>
                    </div>
                )
            })

            }
            </div>
            <button className=" bg-blue-800 flex justify-self-center text-2xl rounded-4xl ">Show More Blogs</button>
        </div>
    )
}

export default Section9;