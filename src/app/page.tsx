import Image from "next/image";
import Navbar from '@/app/navbar/navbar'
import Hero from '@/app/hero/hero'
import Client from '@/app/client/client'
import Community from'@/app/community/community'
import Achievement from'@/app/achievement/achievement'
import Update from '@/app/update/update'
import Footer from'@/app/footer/footer'
export default function Home() {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <Client/>
    <Community/>
    <Achievement/>
    <Update/>
    <Footer/>
   </div>
  );
}
