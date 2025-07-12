import { FaArrowRight } from 'react-icons/fa6'

const LandingPage = () => {
  return (
        <div className="h-fit xl:h-[95vh] bg-white sm:items-center flex xl:flex-row flex-col">
          <div className="flex flex-col items-center justify-center xl:h-full gap-y-6 xl:w-1/2 w-full xl:order-1 order-2">
            <div className="text-6xl font-bold self-center flex justify-center items-center flex-col text-black ">
              <h1 className='text-center'>Take Your Bussiness</h1>
              <h1 className='text-blue-600'>Online Today</h1>
            </div>
            <div className='w-full flex justify-center items-center '>
              <p className="text-xl sm:text-2xl sm:p-0 p-2 font-semibold text-black text-center">
                I help local shops and service providers get stunning, <br className='sm:block hidden'/>
                mobile-friendly websites that brings in more customers{" "}
              </p>
            </div>
            <div className="flex justify-around items-center gap-x-4 m-2 font-semibold text-2xl">
              <button className="rounded-2xl bg-blue-700 text-white  sm:p-2 py-2 px-1 sm:px-4 flex justify-around align-middle items-center">
                <p>See my work
                <FaArrowRight className='inline mx-0.5' />
                </p>
              </button>
              <button className="rounded-2xl bg-yellow-500 py-2 px sm:p-2 sm:px-4">
                Let's talk on WhatsApp
              </button>
            </div>
            <div className="flex text-lg text-white items-center justify-center rounded-2xl bg-gradient-to-tr p-1 px-6 from-gray-400 to-gray-700">
              <p>Beat and outpace your competitor smartly!</p>
            </div>
          </div>
          <img src='yy.png' className="xl:h-full sm:w-4/6 md:w-6/12 xl:w-1/2 w-full xl:order-2 order-1"></img>
        </div>
  )
}

export default LandingPage