// 'use client';

import { Props as AboutProps } from "./About";
import NavDots from "./NavDots";
import Socials from "./Socials";


// function  (props?: any) {
    function Wrapper (Component: React.FC<any>, idName: string, classNames?: string) {
        return function HOC (props?: any) {
            return (
                <div id={idName} className={`min-h-screen flex flex-row container ${classNames}`}>
                    <Socials />
        
                    <div className="flex-1 w-full flex-col py-16 px-8 max-xs:pt-16 max-xs:px-4 max-xs:pb-8 centered-flex">
                        <Component {...props} />
        
                        <div className="w-full pt-8 px-0 flex flex-col justify-end items-end max-[500px]:p-8 max-sm:hidden">
                            <p className="paragraph uppercase text-black"> &copy; 2023 | Alviss Raghnall</p>
                            <p className="paragraph uppercase text-black">All rights reserved</p>
                        </div>
                    </div>
        
                    <NavDots active={idName} />
                </div>
              )
          } 
    }
// }

export default Wrapper