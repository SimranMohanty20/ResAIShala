import React, { useState } from 'react';
import { motion } from 'framer-motion';
import rob from '../assets/Rob.png';

const Rob = () => {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const getEyeStyle = (eyeCenterX, eyeCenterY) => {
        const dx = cursorPos.x - eyeCenterX;
        const dy = cursorPos.y - eyeCenterY;
        const angle = Math.atan2(dy, dx);

        // Increased maximum distance the eye can move
        const maxMove = 10;

        // Calculate new position within bounds
        const moveX = maxMove * Math.cos(angle);
        const moveY = maxMove * Math.sin(angle);

        return {
            transform: `translate(${moveX}px, ${moveY}px)`
        };
    };

    return (
        <div className='hidden lg:block relative h-[100vh]' onMouseMove={handleMouseMove}>
            <img className='robot-cont scale-75' src={rob} alt="Rob" />
            <div className='relative flex z-4'>
                <motion.div
                    className='absolute top-[-68vh] left-[41.8vw] border-2 border-gray-400 h-20 w-20 flex justify-center items-center rounded-full'
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    animate={isHovered ? { scaleY: 0.1 } : { scaleY: 1 }}
                >
                    <div className='eyes bg-gray-400 h-5 w-5 rounded-full' 
                        style={getEyeStyle(window.innerWidth * 0.418 + 40, window.innerHeight * 0.32)}></div>
                </motion.div>
                <motion.div
                    className='absolute top-[-68vh] left-[55.2vw] border-2 border-gray-400 h-20 w-20 flex justify-center items-center rounded-full'
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    animate={isHovered ? { scaleY: 0.1 } : { scaleY: 1 }}
                >
                    <div className='eyes bg-gray-400 h-5 w-5 rounded-full' 
                        style={getEyeStyle(window.innerWidth * 0.552 + 40, window.innerHeight * 0.32)}></div>
                </motion.div>
            </div>
        </div>
    );
};

export default Rob;
