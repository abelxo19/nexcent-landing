import Image from "next/image"
import a_1 from '../assets/a_1.png'
import a_2 from '../assets/a_2.png'
import a_3 from '../assets/a_3.png'
import a_4 from '../assets/a_4.png'
const achievement = () => {
  return (
   <section className="bg-[#F5F7FA]">
    <div className="ml-14 flex justify-between py-11 ">
        <div>
            <h1 className="text-[25.06px] text-gray-600 font-semibold">Helping a local<span className="text-[#4caf4f] block"> business reinvent itself</span></h1>
            <p className="tracking-tight py-1 text-[11.4px] text-[#18191F]">We reached here with our hard work and dedication</p>      
        </div>
        <div className="mr-52">
            <div className="grid grid-cols-4 gap-7">     
            <Image src={a_1} alt="no" className="place-self-end" />
            <p className="font-bold text-[19.5px] text-gray-600">2,245,561<span className="block tracking-tight text-gray-400 text-[11.14px]">Members</span></p>
            <Image src={a_2} alt="no" className="place-self-end"/>
            <p className="font-bold text-[19.5px] text-gray-600">828,765<span className="block tracking-tight text-gray-400 text-[11.14px]">Event Bookings</span></p>
            <Image src={a_3} alt="no" className="place-self-end"/>
            <p className="font-bold text-[19.5px] text-gray-600">46,228<span className="block tracking-tight text-gray-400 text-[11.14px]">Clubs</span></p>
            <Image src={a_4} alt="no" className="place-self-end"/>
            <p className="font-bold text-[19.5px] text-gray-600">1,987,456<span className="block tracking-tight text-gray-400 text-[11.14px]">Payments</span></p>
            </div>
        </div>
    </div>
   </section>   
  )
}

export default achievement
