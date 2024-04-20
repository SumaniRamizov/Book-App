
import { IoClose } from "react-icons/io5";
<IoClose />

export default function Modal({item,setShow}) {
  return (
    <div className=" flex justify-center items-center modalBg p-3   fixed w-full h-[100vh] inset-0">
        <div className="bg-white p-10 relative w-full md:w-4/5 lg:w-2/5 rounded-md" >
          <button onClick={()=>setShow(false)} className="top-2 right-2 absolute text-3xl" >
          <IoClose />
          </button>
           <div className="flex flex-col md:flex-row gap-4 justify-start text-brown " >
           <img className=" w-[80%] md:w-40 " src={item.volumeInfo.imageLinks.smallThumbnail} alt="" />
            <div className="text-left">
                <h2 className="text-2xl text-brown font-medium leading-10" >{item.volumeInfo.title}</h2>
                <h3 className="text-lg leading-9 ">Autors: {item.volumeInfo.authors}</h3>
                <h4 className="text-lg  leading-9 text-blue-600">{item.volumeInfo.publisher}/{item.volumeInfo.publishedDate}</h4>
                <h4 className="text-lg">Page count: <span className="text-red-700">{item.volumeInfo.pageCount}</span></h4>

            </div>
           </div>
           <a className="bg-orange hover:opacity-90 w-full py-2 inline-block mt-7 text-white text-xl rounded-md" href={item.volumeInfo.previewLink}>more</a>
           
            
          
        </div>

    </div>
  )
}
