import Image from "next/image"
import Img_2 from "../assets/Illustration.png"
import {TextGenerateEffect } from '../../components/ui/text-generate-effect'
const hero = () => {
  return (
    <div className="bg-[#F5F7FA]"> 
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
        <div>
          <Image
          src={Img_2}
          alt="no"
          width={312}
          height={286}
          className=""/>
        </div>
     </div>
    </div>
  )
}

export default hero
