import Image from 'next/image'
import Icon from '../assets/Icon.png'
import { ArrowRight } from 'lucide-react';
import { AlignJustify } from 'lucide-react';
const navbar = () => {
  return (
    <header className='sticky'>
    <div className='container'>
     <div className='flex justify-between mt-4'>   
      <div className='flex gap-1'>
        <Image 
        src={Icon}
        alt='no'
        className='w-5 h-5' />
        <span className='font-extrabold text-[20px]'>Nexcent</span>
      </div>
      <div>
        <div className=''>
          <AlignJustify className='md:hidden'/>
          <ul className='hidden md:flex space-x-5'>
            <li className='text-sm'><a href='#'>Home</a></li>
            <li className='text-sm'><a href='#'>Features</a></li>
            <li className='text-sm'><a href='#'>Community</a></li>
            <li className='text-sm'><a href='#'>Blog</a></li>
            <button className='tracking-tighter text-xs px-4 py-2 bg-green-500 text-white rounded-sm'><span>Register Now</span><ArrowRight className='inline-flex h-3 w-7'/></button>
          </ul>
        </div>
      </div>
      </div> 
    </div>
    </header>  
  )
}

export default navbar
