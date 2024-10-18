import React from 'react'

const HomePage = () => {
  return (
    <>
    <div className="flex flex-col text-center text-white p-6 h-full">
      <div className="flex-1 flex-col">
        <h2 className="font-Barlow text-xl tracking-wider leading-[33.6%] text-spaceBlue-300">SO, YOU WANT TO TRAVEL TO</h2>
        <h1 className="font-Bellefair text-8xl leading-[171.9%]">SPACE</h1>
        <p className="font-Barlow text-lg leading-[180%] tracking-normal text-spaceBlue-300 ">
          Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!
        </p>
      </div>
      <div className="flex flex-1 basis-full justify-center items-center">
        <div className="    ">
          <a href="#" className="font-Bellefair leading[36.7%] text-2xl text-black px-[30px] py-16 bg-white rounded-full hover:px-28 hover:py-36 hover:bg-white hover:rounded-full hover:opacity-50">EXPLORE</a>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default HomePage
