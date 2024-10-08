'use client'; 
import Image from "next/image"
import Logo_1 from '../assets/Logo (1).png'
import Logo_2 from '../assets/Logo (2).png'
import Logo_3 from '../assets/Logo (3).png'
import Logo_4 from '../assets/Logo (4).png'
import Logo_5 from '../assets/Logo (5).png'
import Logo_6 from '../assets/Logo (6).png'
import Logo_7 from '../assets/Logo (7).png'
import { motion } from "framer-motion"
const client = () => {
  return (
    <div className="container overflow-clip">
     <div className="flex flex-col items-center py-6">   
      <div>  
      <h1 className="text-center font-semibold text-[25px] text-gray-600">our clients</h1>
      <p className="text-center text-[11.4px] pt-2 text-gray-400 ">We have been working with some Fortune 500+ clients</p>
      </div>
      <div className="flex overflow-hidden py-7 [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
      <motion.div className="flex space-x-36 flex-none"
      animate={{
        translateX:'-50%'
      }}
      transition={{
        duration:5,
        repeat:Infinity,
        ease:'linear',
        repeatType:'loop'
      }}
      >
      <Image 
        src={Logo_1} alt="no" />
      <Image 
        src={Logo_2} alt="no" />
      <Image 
        src={Logo_3} alt="no" />
      <Image 
        src={Logo_4} alt="no" />
      <Image 
        src={Logo_5} alt="no" />
      <Image 
        src={Logo_6} alt="no" />
      <Image 
        src={Logo_7} alt="no" />
       <Image 
        src={Logo_1} alt="no" />
      <Image 
        src={Logo_2} alt="no" />
      <Image 
        src={Logo_3} alt="no" />
      <Image 
        src={Logo_4} alt="no" />
      <Image 
        src={Logo_5} alt="no" />
      <Image 
        src={Logo_6} alt="no" />
      <Image 
        src={Logo_7} alt="no" />
      </motion.div>  
      </div> 
      </div> 
    </div>
  )
}

export default client
