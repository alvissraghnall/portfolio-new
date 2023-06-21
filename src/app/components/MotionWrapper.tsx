"use client";

import { motion } from "framer-motion";

function MotionWrapper (Component: React.FC<any>, classNames?: string) {
    return function HOC (props?: any) {
        return (
            <motion.div
                className={`centered-flex ${classNames}`}
                whileInView={{
                    y: [100, 50, 0],
                    opacity: [0,0,1]
                }}    
                transition={{
                    duration: .5
                }}
                
            >

                <Component {...props} />
    
            </motion.div>
          )
      } 
}
// }

export default MotionWrapper