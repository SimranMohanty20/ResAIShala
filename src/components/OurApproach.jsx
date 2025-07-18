import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'
gsap.registerPlugin(ScrollTrigger);


const OurApproach = () => {

    useGSAP(() => {

        gsap.from("#divider", {
            height: "0px",
            scrollTrigger: {
                trigger: "#masker1",
                start: "0% 60%",
                end: "95% 60%",
                markers: false,
                scrub: true,
                ease: "linear",
            }
        })

        gsap.from("#boxx-1", {
            x: -400,
            scrollTrigger: {
                trigger: "#masker1",
                start: "10% 60%",
                markers: false,
                scrub: false,
                ease: "linear",
            }
        })
        gsap.from("#boxx-2", {
            x: 400,
            scrollTrigger: {
                trigger: "#masker1",
                start: "30% 60%",
                markers: false,
                scrub: false,
                ease: "linear",
            }
        })
        gsap.from("#boxx-3", {
            x: -400,
            scrollTrigger: {
                trigger: "#masker1",
                start: "50% 60%",
                markers: false,
                scrub: false,
                ease: "linear",
            }
        })
        gsap.from("#boxx-4", {
            x: 400,
            scrollTrigger: {
                trigger: "#masker1",
                start: "70% 60%",
                markers: false,
                scrub: false,
                ease: "linear",
            }
        })
        gsap.from("#boxx-5", {
            x: -400,
            scrollTrigger: {
                trigger: "#masker1",
                start: "90% 60%",
                markers: false,
                scrub: false,
                ease: "linear",
            }
        })

    }, [])

    return (
        <div className='w-[95%] h-[940px] mb-10  hidden lg:block relative'>
            <h1 className='fira-sans-bold text-center text-[4vw]'>Our Approach</h1>
            <h3 className='fira-sans-medium text-center m-8 text-[1.5vw]'>We focus on interactive, hands-on learning that bridges theory and real-world application. Our approach includes:</h3>
            <div id='masker1' className='w-full relative flex flex-col items-center gap-10 mt-10'>
                <div id='divider' className='w-5 h-full absolute bg-background2 mb-20 left-[50%] -translate-x-[50%]'></div>
                <div className=' w-[800px] h-[120px] relative overflow-hidden'>
                    <div className='absolute w-1/2 translate-x-[100%] h-full overflow-hidden'>
                        <div id='boxx-1' className='w-full h-full bg-secondary rounded-r-lg border-gray-400 border-t-2 border-b-2 border-r-2 text-center flex flex-col justify-center'>
                            <h1 className='fira-sans-bold text-[1.4vw]'>1. Experiential Learning</h1>
                            <h3 className='fira-sans-medium text-[.8vw] text-gray-600'>Project-based and problem-solving activities.</h3>
                        </div>
                    </div>
                </div>
                <div className=' w-[800px] h-[120px] relative'>
                    <div className='absolute w-1/2  h-full overflow-hidden'>
                        <div id='boxx-2' className='w-full h-full bg-secondary text-center flex flex-col justify-center rounded-l-lg border-gray-400 border-t-2 border-b-2 border-l-2'>
                            <h1 className='fira-sans-bold text-[1.4vw]'>2. Sustainability Research</h1>
                            <h3 className='fira-sans-medium text-[.8vw] text-gray-600'>Develop eco-freindly practice and products.</h3>

                        </div>
                    </div>
                </div>
                <div className=' w-[800px] h-[120px] relative'>
                    <div className='absolute w-1/2 translate-x-[100%] h-full overflow-hidden'>
                        <div id='boxx-3' className='w-full h-full bg-secondary text-center flex flex-col justify-center rounded-r-lg border-gray-400 border-t-2 border-b-2 border-r-2'>
                            <h1 className='fira-sans-bold text-[1.4vw]'>3. Collaborative Learning</h1>
                            <h3 className='fira-sans-medium text-[.8vw] text-gray-600'>Community engagement and teamwork.</h3>
                        </div>
                    </div>
                </div>
                <div className=' w-[800px] h-[120px] relative'>
                    <div className='absolute w-1/2  h-full overflow-hidden'>
                        <div id='boxx-4' className='w-full h-full bg-secondary text-center flex flex-col justify-center rounded-l-lg border-gray-400 border-t-2 border-b-2 border-l-2'>
                            <h1 className='fira-sans-bold text-[1.4vw]'>4. Innovative Tools:</h1>
                            <h3 className='fira-sans-medium text-[.8vw] text-gray-600'>Latest AI, Robotics, and IoT technologies.</h3>
                        </div>
                    </div>
                </div>
                <div className=' w-[800px] h-[120px] relative'>
                    <div className='absolute w-1/2 translate-x-[100%] h-full overflow-hidden'>
                        <div id='boxx-5' className='w-full h-full bg-secondary text-center flex flex-col justify-center rounded-r-lg border-gray-400 border-t-2 border-b-2 border-r-2'>
                            <h1 className='fira-sans-bold text-[1.4vw]'>5. Continuous Improvement</h1>
                            <h3 className='fira-sans-medium text-[.8vw] text-gray-600'>Regular feedback and curriculum updates.</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurApproach