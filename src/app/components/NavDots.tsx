// 'use client';

type Props = {
    active: string;
}

function NavDots({ active }: Props) {
    return (
        <div className="flex justify-center items-center flex-col p-4 max-[500px]:hidden">
            {
                ['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item, index) => (
                    <a
                        href={`#${item.toLowerCase()}`} 
                        className={`w-2.5 h-2.5 cursor-pointer rounded-full bg-[#cbcbcb] m-2 transition-[background-color] duration-200 ease-in-out hover:bg-secondary 4xl:w-5 4xl:h-5 ${ active === item && 'bg-[#313bac]' }`}
                        key={index}
                    />
                ))
            }
        </div>
    )
}

export default NavDots