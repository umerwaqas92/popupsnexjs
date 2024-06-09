import React from 'react'
{/* <Popup1 showpopup={showpopup} setShowPopup={setShowPopup}/> */}
// 
export default function Popup1({
    showpopup,setShowPopup
    
}) {
  return (
    <div className=" absolute  top-96 md:left-80 z-10 bg-transparent  md:w-[600px] md:h-[250px] mx-4  animate-bounce  ">
    

    <img src="/popip1.png" className="  w-full h-full object-fill  shadow-2xl "  />

    <button onClick={()=>setShowPopup(false)} className=" absolute  top-1 right-4 w-[60px] h-[30px]   "></button>

    <button onClick={()=>setShowPopup(false)} className=" absolute   bottom-[32px] right-[25px]  w-[100px] h-[30px]   "></button>
    <button onClick={()=>setShowPopup(false)} className=" absolute   bottom-[32px] right-[130px]  w-[100px] h-[30px]   "></button>


    
  </div>



  )
}
