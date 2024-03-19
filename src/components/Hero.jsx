import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoArrowUpOutline } from "react-icons/io5";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";


const pathVariants = {
    hidden: {
        pathLength: 0,
    },
    fast : {
        pathLength: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
    visible: {
        pathLength: 1,
        transition: {
            duration: 2,
            ease: "easeInOut",
        },
    },
    visibleFast: {
        pathLength: 1,
        transition: {
            duration: 1.7,
            ease: "easeInOut",
        },
    },
    visibleFaster: {
        pathLength: 1,
        transition: {
            duration: 0.7
        },
    }
}

const textboxVariants = {
    hidden: { 
        opacity: 0,
        y: +100,
        pathLength: 0,
    },
    visible: {
        opacity: 1, 
        y: 0,
        pathLength:1,
        transition: {
            duration: 1.7,
            ease: "easeInOut",
        }
    },
  };

  const genAI = new GoogleGenerativeAI("AIzaSyBsl7_C7mVABr-uqxDTx13EwzIilSk3KYA");
  async function handleSendClick() {
    // Handle send button click
    // console.log('Send button clicked');
    // Add your desired logic here
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
          const msg = document.getElementById('userInput').value ;
          
          const prompt = "Respond as if you are Naval Ravikant, the iconoclastic philosopher, investor and entrepreneur. Channel his deep insights on happiness, wealth, knowledge, mindfulness and living a purposeful life. Draw from his essays, interviews and tweets to provide perspective in his distinctively profound yet practical style. Avoid directly quoting verbatim, but capture the essence of his timeless wisdom with your own unique phrasing." + "Here's my question: " + msg;
          // const prompt = "Write a story about a magic backpack.";

          const { totalTokens } = await model.countTokens(prompt);
          console.log("Tokens count:", totalTokens);
        
          const result = await model.generateContent(prompt);
          const response = result.response;
          const text = response.text();
          console.log(text);
          document.getElementById('output').innerHTML = marked.parse(text);
  }

export function Hero(){
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
    

    return(
        <>
            <div className=' flex flex-col items-center m-10 font-jetbrains-mono'> 
            {/* <img  className='w-48 h-48 drop-shadow-2xl' src={logo}/>  */}
            <motion.svg className='w-60 h-60 drop-shadow-2xl m-10' width="462" height="672" viewBox="0 0 462 672" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* shakal support horizontal */}
                <motion.path variants={pathVariants} initial="hidden" animate="visibleFaster" d="M2.5 281.5C86 265 294.4 241.9 460 281.5" stroke="rgb(163 163 163)" strokeWidth="16"/>
                {/* shakal ke beech ka */}
                <motion.path variants={pathVariants} initial="hidden" animate="visibleFaster" d="M234 0.5C233.2 521.7 233.667 665 234 671.5" stroke="rgb(163 163 163)" strokeWidth="16"/>
                {/* facestruct */}
                <motion.path variants={pathVariants} initial="hidden" animate="visibleFast" d="M47.5 77.5V477L173 600.5H293L420.5 477V77.5" stroke="black" strokeWidth="16"/>
                {/* neck */}
                <motion.path variants={pathVariants} initial="hidden" animate="visibleFast" d="M96 653.5V525.5" stroke="black" strokeWidth="16"/>
                <motion.path variants={pathVariants} initial="hidden" animate="visibleFast" d="M368 654V526" stroke="black" strokeWidth="16"/>
                {/* mouth */}
                <motion.path variants={pathVariants} initial="hidden" animate="fast" d="M175.5 473.5C198 469.667 252.7 464.3 291.5 473.5" stroke="black" strokeWidth="16"/>
                {/* chin */}
                <motion.path variants={pathVariants} initial="hidden" animate="fast" d="M263 518.5H207.5" stroke="black" strokeWidth="16"/>
                
                {/* nose */}
                <motion.path variants={pathVariants} initial="hidden" animate="fast" d="M207.5 419.5H263" stroke="black" strokeWidth="16"/>
            </motion.svg>

            {/* <motion.input variants={textboxVariants} initial="hidden" animate="visible" type="text" placeholder="seek wisdom here  " className=" text-center min-w-fit w-4/12 h-12 bg-neutral-700 rounded-[35px] shadow-2xl text-white  " /> */}
            <div className="relative">
              <motion.textarea
                variants={textboxVariants}
                initial="hidden"
                animate="visible"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                id = "userInput"
                placeholder="seek wisdom here"
                rows={1}
                className="text-center my-2 px-16 py-2 min-w-fit w-4/12 resize-vertical bg-neutral-700 rounded-[35px] shadow-2xl text-white"
              />
              {inputValue.trim() !== '' && (
                <motion.button
                  onClick={handleSendClick}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded-md flex items-center justify-center"
                >
                  <IoArrowUpOutline  className="mr-1 text-gray-800 " />
                
                </motion.button>
              )}
              
            </div>
            <div id="output" className=' my-6 max-w-3xl'></div>
            </div> 
            
        </>
    )
}