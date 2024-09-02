import Image from "next/image";
import Navbar from '@/app/navbar/navbar'
import Hero from '@/app/hero/hero'
import Client from '@/app/client/client'
import Community from'@/app/community/community'
import Achievement from'@/app/achievement/achievement'
export default function Home() {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <Client/>
    <Community/>
    <Achievement/>
   </div>
  );
}
