import { motion } from "framer-motion"
import logo from '/src/assets/svg/full.svg'

const pathVariants = {
    hidden: {
        pathLength: 0,
    },
    visible: {
        pathLength: 1,
        transition: {
            duration: 2,
            ease: "easeInOut",
        },
    }
}
export function Hero(){
    return(
        <>
            <div className=' flex flex-col items-center p-10 '> 
            {/* <img  className='w-48 h-48 drop-shadow-2xl' src={logo}/>  */}
            <motion.svg className='w-48 h-48 drop-shadow-2xl m-10' width="462" height="672" viewBox="0 0 462 672" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path variants={pathVariants} initial="hidden" animate="visible" d="M47.5 77.5V477L173 600.5H293L420.5 477V77.5" stroke="black" strokeWidth="16"/>
                <motion.path variants={pathVariants} initial="hidden" animate="visible" d="M234 0.5C233.2 521.7 233.667 665 234 671.5" stroke="black" strokeWidth="16"/>
                <motion.path variants={pathVariants} initial="hidden" animate="visible" d="M96 653.5V525.5" stroke="black" strokeWidth="16"/>
                <motion.path variants={pathVariants} initial="hidden" animate="visible" d="M368 654V526" stroke="black" strokeWidth="16"/>
                <motion.path variants={pathVariants} initial="hidden" animate="visible" d="M175.5 473.5C198 469.667 252.7 464.3 291.5 473.5" stroke="black" strokeWidth="16"/>
                <motion.path variants={pathVariants} initial="hidden" animate="visible" d="M263 518.5H207.5" stroke="black" strokeWidth="16"/>
                <motion.path variants={pathVariants} initial="hidden" animate="visible" d="M2.5 281.5C86 265 294.4 241.9 460 281.5" stroke="black" strokeWidth="16"/>
                <motion.path variants={pathVariants} initial="hidden" animate="visible" d="M207.5 419.5H263" stroke="black" strokeWidth="16"/>
            </motion.svg>

            <input type="text" className=" w-96 h-12 bg-neutral-700 rounded-[35px] shadow-2xl text-white"/>

            </div> 
            
        </>
    )
}