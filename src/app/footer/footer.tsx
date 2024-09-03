'use client';
import { ArrowRight, YoutubeIcon } from "lucide-react"
import Icon from '../assets/Icon.png'
import Image from "next/image"
import { Instagram } from 'lucide-react';
import { Dribbble } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Youtube } from 'lucide-react';
import Send from'../assets/send.png'
import { motion } from "framer-motion";
const footer = () => {
  return (
    <div className="mt-20">
     <div className="">    
      <div className="flex flex-col items-center bg-[#F5F7FA] py-5">
        <h1 className="font-semibold text-[44.5px] text-[#263238] text-center">Pellentesque suscipit <span className="block">fringilla libero eu.</span></h1>
        <button className='mt-3 tracking-tighter text-xs px-5 py-2 bg-[#4caf4f] text-white rounded-sm'><span>Get Demo</span><ArrowRight className='inline-flex h-3 w-7'/></button>
      </div>
      <div className="bg-[#263238] py-9">
      <div className="grid grid-cols-4 container">
        <div>
        <div className="flex flex-row items-start gap-1">
        <Image 
        src={Icon}
        alt='no'
        className='w-5 h-7 mt-1' />
        <span className='font-bold text-[24.8px] text-white tracking-wide'>Nexcent</span>
        </div>
        <p className="pt-4 text-[9.74px] text-[#F5F7FA]">Copyright &copy; 2024 Landify UI Kit.<span className="block">All rights reserved</span></p>
        <div className="flex pt-5 w-[122px]">
          <Instagram className="text-white h-[12px]"/>
          <Dribbble className="text-white h-[12px]"/>
          <Twitter className="text-white h-[12px]"/>
          <Youtube className="text-white h-[12px]"/>
        </div>
        </div>
        <div className="place-self-end">
          <p className="mb-5 font-semibold text-[14.92px] tracking-wide text-[#ffffff]">Company</p>
          <ul className="ul">
            <li className="li">About</li>
            <li className="li">Blog</li>
            <li className="li">Contact Us</li>
            <li className="li">Pricing</li>
            <li className="li">Testomonial</li>
          </ul>
        </div>
        <div className="place-self-center">
        <p className="mb-5 font-semibold text-[14.92px] tracking-wide text-[#ffffff]">Support</p>
          <ul className="ul">
            <li className="li">Help Center</li>
            <li className="li">Terms Of Service</li>
            <li className="li">Legal</li>
            <li className="li">Privacy Policy</li>
            <li className="li">Status</li>
          </ul>
        </div>
        <div className="place-self-start">
          <p className="mb-5 font-semibold text-[14.92px] tracking-wide text-[#ffffff]">Stay Up to Date</p>
          <div className="relative">
          <Image src={Send} alt="" className="absolute ml-36 mt-2" />  
          <input 
          placeholder="Your email address"
          className="bg-gray-600 rounded-md px-4 py-1  text-[11.74px] text-[#D9DBE1]"
          ></input>
          </div>
        </div>
      </div>
      </div>
     </div>
    </div>
  )
}

export default footer
