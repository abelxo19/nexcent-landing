import Image from "next/image";
import C1 from '../assets/c1.png';
import C2 from '../assets/c_2.png';
import C3 from '../assets/c_3.png';

const Community = () => {
  return (
    <div className="container py-3">
      <div className="flex flex-col">
        <h1 className="text-center text-[20.06px] tracking-wide text-gray-600 font-semibold">
          Manage your entire community <span className="block">in a single system</span>
        </h1>
        <p className="py-1 text-center text-[11.4px] text-gray-400">
          Who is Nextcent suitable for?
        </p>
      </div>
      <div className="flex justify-center items-center space-x-24 mt-2">
        <div className="flex flex-col items-center w-[600px] h-[196px] rounded-sm shadow-md">
          <Image src={C1} alt="no" width={45} height={39} />
          <h1 className="text-[19.5px] text-gray-600 font-bold text-center">
            Membership <span className="block">Organisations</span>
          </h1>
          <p className="text-[9.8px] tracking-tighter text-gray-400 text-center ">
            Our membership management software provides full automation of membership renewals and payments
          </p>
        </div>
        <div className="flex flex-col items-center w-[600px] h-[196px] rounded-sm shadow-md">
          <Image src={C2} alt="no" width={45} height={39} />
          <h1 className="text-[19.5px] text-gray-600 font-bold text-center">
            National <span className="block">Associations</span>
          </h1>
          <p className="text-[9.8px] tracking-tighter text-gray-400 text-center">
            Our membership management software provides full automation of membership renewals and payments
          </p>
        </div>
        <div className="flex flex-col items-center w-[600px] h-[196px] rounded-sm shadow-md">
          <Image src={C3} alt="no" width={45} height={39} />
          <h1 className="text-[19.5px] text-gray-600 font-bold text-center">
            Clubs and <span className="block">Groups</span>
          </h1>
          <p className="text-[9.8px] tracking-tighter text-gray-400 text-center">
            Our membership management software provides full automation of membership renewals and payments
          </p>
        </div>
      </div>
    </div>
  );
}

export default Community;
