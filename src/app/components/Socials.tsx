import {
    BsTwitter,
    BsInstagram
} from 'react-icons/bs';
import {
    FaFacebookF
} from 'react-icons/fa';

function Socials() {
  return (
    <div className='flex items-center justify-end flex-col p-4 max-[500px]:hidden [&>div]:hover:cursor-pointer'>
        <div className="w-10 h-10 rounded-full bg-blanc my-1 mx-0 border border-solid border-light-gray centered-flex transition-all duration-300 ease-in-out group hover:bg-secondary hover:border-secondary 4xl:w-[72px] 4xl:h-[72px] 4xl:my-2 4xl:mx-0">
            <BsTwitter className='w-4 h-4 text-normal-gray group-hover:text-blanc 4xl:w-7 4xl:h-7' />
        </div>
        <div className="w-10 h-10 rounded-full bg-blanc my-1 mx-0 border border-solid border-light-gray centered-flex transition-all duration-300 ease-in-out group hover:bg-secondary hover:border-secondary 4xl:w-[72px] 4xl:h-[72px] 4xl:my-2 4xl:mx-0">
            <BsInstagram className='w-4 h-4 text-normal-gray group-hover:text-blanc 4xl:w-7 4xl:h-7' />
        </div>
        <div className="w-10 h-10 rounded-full bg-blanc my-1 mx-0 border border-solid border-light-gray centered-flex transition-all duration-300 ease-in-out group hover:bg-secondary hover:border-secondary 4xl:w-[72px] 4xl:h-[72px] 4xl:my-2 4xl:mx-0">
            <FaFacebookF className='w-4 h-4 text-normal-gray group-hover:text-blanc 4xl:w-7 4xl:h-7' />
        </div>
    </div>
  )
}

export default Socials