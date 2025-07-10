import { FaArrowRight } from 'react-icons/fa6'

const LandingPage = () => {
  return (
        <div className="h-[95vh] bg-gray-200 flex sm:flex-row flex-col">
          <div className="flex flex-col items-center justify-center h-full gap-y-6 sm:w-1/2 w-full">
          <div></div>
            <div className="text-6xl font-bold flex justify-center items-center flex-col text-black">
              <h1>Take Your Bussiness</h1>
              <h1 className='text-blue-600'>Online Today</h1>
            </div>
            <div>
              <p className="text-2xl font-semibold text-black">
                I help local shops and service providers get stunning, <br />
                mobile-friendly websites that bring in more customers{" "}
                <div className="h-10 w-10 inline-block">
                  <img
                    src="cashimage.png"
                    className="h-full w-full"
                    alt="cash img"
                  />
                </div>
              </p>
            </div>
            <div className="flex justify-around items-center gap-x-4 m-2 font-semibold text-2xl">
              <button className="rounded-2xl bg-blue-700 text-white  p-2 px-4 flex justify-around align-middle items-center">
                <p>See my work</p>
                <FaArrowRight />
              </button>
              <button className="rounded-2xl bg-yellow-500 p-2 px-4">
                Let's talk on WhatsApp
              </button>
            </div>
            <div className="flex text-lg text-white items-center justify-center rounded-2xl bg-gradient-to-tr p-1 px-6 from-gray-400 to-gray-700">
              <p>Beat and outpace your competitor smartly!</p>
            </div>
          </div>
          <div className="h-full landingpage sm:w-1/2 w-full"></div>
        </div>
  )
}

export default LandingPage