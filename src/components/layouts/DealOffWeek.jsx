import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import { Link } from 'react-router-dom'
import Countdown from 'react-countdown'
import Renderer from '/src/components/Renderer'

const DealOffWeek = () => {
  return (
    <div className='mt-[100px] pt-[210px] pb-[230px] bg-[url("/src/assets/deal_timer_bg.jpg")] bg-no-repeat bg-center bg-[length:97%_600px] relative'>
        <Container>
            <Heading heading={"DEAL OF THE WEEK"} as={"h6"} className={"font-jost font-medium text-sm text-headingTitle pl-12 relative after:absolute after:top-1/2 after:-translate-y-1/2 after:inline-block after:-left-1 after:content-[''] after:h-0.5 after:w-[40px] after:bg-headingTitle"} />
            <Heading heading={<><b>Spring</b> Collection</>} as={"h3"} className={"font-jost font-medium text-[70px] text-menu pt-2 pb-2 uppercase"} />
            <Link to={"/"}>
              <button className="uppercase font-jost font-medium text-sm text-sm relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-[50px] after:bg-menu after:content-[''] after:transition-all after:duration-300 hover:after:w-full cursor-pointer">Shop Now</button>
            </Link>
            <div className="absolute bottom-11 left-13">
                <Countdown date={new Date('2025-07-27T00:36:59')} renderer={Renderer}/>
            </div>
        </Container>
    </div>
  )
}

export default DealOffWeek