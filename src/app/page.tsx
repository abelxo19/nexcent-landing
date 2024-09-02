import Image from "next/image";
import Navbar from '@/app/navbar/navbar'
import Hero from '@/app/hero/hero'
import Client from '@/app/client/client'
export default function Home() {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <Client/>
   </div>
  );
}
