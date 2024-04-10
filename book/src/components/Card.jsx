import { useState } from "react";
import Modal from "./Modal";


export default function Books({item}) {
  console.log(item)
  
    const [show,setShow] = useState(false)

    const thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    const title = item.volumeInfo.title
    if(thumbnail !== undefined){
      return(
        <>
        <div onClick={()=>setShow(true)} className="mx-5 sm:mx-0 border-4 bg-white hover:scale-90 cursor-pointer transition-all border-brown p-4 rounded-lg ">
         <img className="w-full" src={thumbnail} alt="" />
         <h4 className="mt-2  font-medium text-lg text-brown">{title}</h4>
        </div>
       {
        show &&  <Modal item={item} setShow={setShow}  />
       }
        </>
      )
    }
 
}
