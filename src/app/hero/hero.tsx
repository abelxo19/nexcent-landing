'use client';
import Image from "next/image"
import Img_2 from "../assets/Illustration.png"
import {TextGenerateEffect } from '../../components/ui/text-generate-effect'
import { motion } from "framer-motion"
const hero = () => {
  return (
    <div className="bg-[#F5F7FA] py-5"> 
      <div className="container flex justify-between items-center pt-20">
        <div className="space-y-2 w-1/2 py-2">
          <h1 className="text-[53px] font-semibold text-gray-600">Lessons and insights</h1>
          <TextGenerateEffect 
           words="from 8 years" 
           className="text-[#4caf4f] font-semibold text-[53px]"
           filter={true}
           duration={0.8}
           />
          <p className="text-gray-400 tracking-tight text-[16px]">Where to grow your business as a photographer: site or social media?</p>
          <button className="bg-[#4caf4f] text-sm text-white px-4 py-2 tracking-tighter rounded-sm">Register</button>
        </div>
       <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      whileHover={{
        scale: 1.1,
        rotate: 3,
        opacity: 0.9,
        filter: 'blur(2px)',
      }}
      className="relative"
    >
      <Image
        src={Img_2}
        alt="Cool Animation"
        width={352}
        height={286}
        className="rounded-lg"
      />
    </motion.div>
     </div>
    </div>
  )
}

export default hero
