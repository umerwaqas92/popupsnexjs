"use client";
import react, { useState } from "react";
import AppBar from "./components/Appbar";
import MyFooter from "./components/Footer";
import Link from "next/link";
import { X } from 'lucide-react';
import Popup1 from "./components/Popup1";

import { Phone } from 'lucide-react';

export default function Home() {
  const [showpopup, setShowPopup] = useState(true);
  return (
   <>
    
    {
      showpopup &&  <Popup1 showpopup={showpopup} setShowPopup={setShowPopup}/>
    }

   <AppBar />
   
   {/* call button ppup */}
   <div className="flex fixed bottom-4 right-4 z-10  bg-orange-400 rounded-full  size-14  container justify-center items-center  shadow-xl">
    <Link href="tel:+1 831 471 5881"> <Phone className="text-white" size={30} /></Link>
  </div>


   <div className=" flex flex-col  justify-center w-full items-center">
    <div className=" flex flex-col items-center justify-center max-w-4xl gap-4 mt-20 px-2">  
    {/* •You buy an software to boost up your PC speed but you find that there are scripts going on and Pop Up generated on the screen like :-
"Your System is Infected" and then a Call Option there. */}
  
  <h2 className="text-4xl text-center font-bold text-red-600  ">"Your System is Infected" and then a Call Option there</h2>

    <h1 className="text-6xl  text-center font-black">Shield Your System with🛡️ SecureGuard</h1>
    <p className="text-xl text-center"> Cutting-Edge Technology to Keep Your Data Safe and Secure</p>
    <div className=" flex flex-row">
    <button className="btn btn-primary bg-[#eab308]">Download Now</button>
    <Link href="#"> <a className="btn btn-ghost">Learn More</a></Link>


   
  

    </div>
    <p className="text-sm text-center italic"> "Popup Calls are the software generated calls which are used by software companies for their customers".</p>






   
   
   <h2 className="text-6xl text-center font-black text-black md:mt-32   ">
    <Link href="tel:1800-123-4567">Call Now: +1 831 471 5881</Link>
    </h2>
   
   <p className="text-xl text-center"> Our experts are available 24/7 to help you with any issues you may have</p>


   <br />

    </div>

   </div>


<br />
<br />
<br />
<br />



<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />


   <MyFooter />
   </>
  );
}
