
import {
    BsTwitter,
    BsGithub, BsLinkedin
} from 'react-icons/bs';
import {
    FaFacebookF
} from 'react-icons/fa';

function Socials() {
  return (
    <div className='flex items-center justify-end flex-col p-4 max-[500px]:hidden [&>div]:hover:cursor-pointer'>

        <a target='_blank' rel='noopener noreferrer' href="https://twitter.com/alvissraghnall" className="w-10 h-10 rounded-full bg-blanc my-1 mx-0 border border-solid border-light-gray centered-flex transition-all duration-300 ease-in-out group hover:bg-secondary hover:border-secondary 4xl:w-[72px] 4xl:h-[72px] 4xl:my-2 4xl:mx-0 no-underline">
            <BsTwitter className='w-4 h-4 text-normal-gray group-hover:text-blanc 4xl:w-7 4xl:h-7' />
        </a>
        <a target='_blank' rel='noopener noreferrer' href="https://github.com/alvissraghnall" className="w-10 h-10 rounded-full bg-blanc my-1 mx-0 border border-solid border-light-gray centered-flex transition-all duration-300 ease-in-out group hover:bg-secondary hover:border-secondary 4xl:w-[72px] 4xl:h-[72px] 4xl:my-2 4xl:mx-0 no-underline">
            <BsGithub className='w-4 h-4 text-normal-gray group-hover:text-blanc 4xl:w-7 4xl:h-7' />
        </a>
        <a target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/elijah-annie-stewart-456749214" className="w-10 h-10 rounded-full bg-blanc my-1 mx-0 border border-solid border-light-gray centered-flex transition-all duration-300 ease-in-out group hover:bg-secondary hover:border-secondary 4xl:w-[72px] 4xl:h-[72px] 4xl:my-2 4xl:mx-0 no-underline">
            <BsLinkedin className='w-4 h-4 text-normal-gray group-hover:text-blanc 4xl:w-7 4xl:h-7' />
        </a>
        <a target='_blank' rel='noopener noreferrer' href="https://www.facebook.com/profile.php?id=100089602208618" className="w-10 h-10 rounded-full bg-blanc my-1 mx-0 border border-solid border-light-gray centered-flex transition-all duration-300 ease-in-out group hover:bg-secondary hover:border-secondary 4xl:w-[72px] 4xl:h-[72px] 4xl:my-2 4xl:mx-0 no-underline">
            <FaFacebookF className='w-4 h-4 text-normal-gray group-hover:text-blanc 4xl:w-7 4xl:h-7' />
        </a>
    </div>
  )
}

export default Socials