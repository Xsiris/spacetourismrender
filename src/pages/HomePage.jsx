import React from 'react'
import {NavLink} from 'react-router-dom'

const HomePage = () => {
  return (
    <>
    <div className="flex flex-col text-center text-white p-6 h-full md:py-32 md:px-10 lg:flex-row">
      <div className="flex-1 flex-col md:px-10 lg:items-center lg:justify-center">
        <h2 className="font-Barlow text-xl tracking-wider leading-[33.6%] text-spaceBlue-300">SO, YOU WANT TO TRAVEL TO</h2>
        <h1 className="font-Bellefair text-8xl leading-[171.9%]">SPACE</h1>
        <p className="font-Barlow text-lg leading-[180%] tracking-normal text-spaceBlue-300 ">
          Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!
        </p>
      </div>
      <div className="flex flex-1 basis-full justify-center items-center">
        <div className="relative">
          <NavLink to="/destination" href="#" className="relative z-[1] peer font-Bellefair leading[36.7%] text-xl text-black">
            <span className="relative z-[3]">EXPLORE</span>
            <div className="z-[2] w-36 h-36 peer rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white"></div>
          </NavLink>
          <div className="transition-all ease-in-out z-0 w-80 h-80 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 bg-white peer-hover:opacity-25 duration-300"></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default HomePage
