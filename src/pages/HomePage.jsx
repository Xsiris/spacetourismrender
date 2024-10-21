import React from 'react'
import {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'

const HomePage = () => {
  const [headerText, setHeaderText] = useState('');
  const [title, setTitle] = useState('');
  const [paragraphText, setParagraphText] = useState('');
  // async await method
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://dev-spacetourism-decoupled.pantheonsite.io/jsonapi/node/home_page");
        const data = await res.json();

        // Assign state
        setHeaderText(data.data[0].attributes.field_header_1);
        setTitle(data.data[0].attributes.field_header_2);
        setParagraphText(data.data[0].attributes.field_paragraph);

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);


  return (
    <>
    <div className="flex flex-col text-center text-white p-6 h-full md:py-32 lg:flex-row sm:px-32">
      <div className="flex-1 flex-col md:px-10 lg:justify-end lg:flex lg:items-start">
        <h2 className="font-Barlow text-xl tracking-widest leading-[33.6%] text-spaceBlue-300 md:text-[28px] lg:text-left lg:w-full">{title}</h2>
        <h1 className="font-Bellefair text-8xl leading-[171.9%] md:text-[144px] lg:text-left lg:w-full">{headerText}</h1>
        <p className="font-Barlow text-lg leading-[180%] tracking-normal text-spaceBlue-300 lg:text-left lg:w-3/4 xl:1/2">
          {paragraphText}
        </p>
      </div>
      <div className="flex flex-1 basis-full justify-center items-center md:mt-32 lg:mt-0 lg:items-end lg:flex-[0.5] lg:-translate-y-1/4">
        <div className="relative">
          <NavLink to="/destination" href="#" className="relative z-[1] peer font-Bellefair leading[36.7%] text-xl text-black">
            <span className="relative z-[3] md:text-3xl">EXPLORE</span>
            <div className="z-[2] w-36 h-36 peer rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white md:w-60 md:h-60"></div>
          </NavLink>
          <div className="transition-all ease-in-out z-0 w-80 h-80 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 bg-white peer-hover:opacity-25 duration-300 md:w-96 md:h-96"></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default HomePage
