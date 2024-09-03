import Image from "next/image"
import I1 from '../assets/image 18.png'
import I2 from '../assets/image 19.png'
import I3 from '../assets/image 20.png'
const update = () => {
  return (
   <div className="mx-36"> 
    <div className="flex justify-around space-x-5 mt-10">
      {/* Card 1 */}
      <div className="relative bg-white w-80 h-96 overflow-hidden ">
        <Image src={I1} alt="no" className="w-full h-72 object-cover rounded-lg" />
        <div className="absolute inset-x-0 bottom-5 px-5 py-3 bg-[#F5F7FA] mx-3 rounded-lg flex flex-col items-center shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 text-center">
            Creating Streamlined Safeguarding Processes with OneRen
          </h3>
          <a href="#" className="mt-2 text-[#4caf4f] font-bold inline-block">
            Readmore ➜
          </a>
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative bg-white w-80 h-96 overflow-hidden">
        <Image src={I2} alt="no" className="w-full h-72 object-cover rounded-lg" />
        <div className="absolute inset-x-0 bottom-5 px-5 py-3 bg-[#F5F7FA] mx-3 rounded-lg flex flex-col items-center shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 text-center">
            What are your safeguarding responsibilities and how can you manage them?
          </h3>
          <a href="#" className="mt-2 text-[#4caf4f] font-bold inline-block">
            Readmore ➜
          </a>
        </div>
      </div>

      {/* Card 3 */}
      <div className="relative bg-white w-80 h-96 overflow-hidden">
       <Image src={ I3} alt="no" className="w-full h-72 object-cover rounded-lg" />
        <div className="absolute inset-x-0 bottom-5 px-5 py-3 bg-[#F5F7FA] mx-3 rounded-lg flex flex-col items-center shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 text-center">
            Revamping the Membership Model accountability  with Triathlon Australia
          </h3>
          <a href="#" className="mt-2 text-[#4caf4f] font-bold inline-block">
            Readmore ➜
          </a>
        </div>
      </div>
    </div>
    </div> 
  )
}

export default update
