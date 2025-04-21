import React from 'react'

const PersonalCard = () => {
  return (
    <div className="p-8 bg-green-300 xl:w-[344px] md:h-[570] h-[640px] min-w-[280px] w-full flex justify-center items-start xl:sticky xl:top-20">
          <div className="flex flex-col justify-between h-full w-full">
            <div className="w-full gap-y-4">
              <div className="flex justify-center w-full align-middle px-2">
                <img src="" alt="" />
                <div className="bg-slate-600 h-64 w-64">a</div>
              </div>
              <div className="flex justify-center w-full align-middle flex-col gap-y-2">
                <div className="w-full flex justify-center">
                  <p className="font-bold text-center text-3xl text-white">
                    Mrunal Malkar
                  </p>
                </div>
                <div className="flex justify-center w-full align-middle flex-col">
                  <p className="font-semibold text-center text-xl text-white">
                    Full-stack Developer{" "}
                    <span className="text-lg">-INDIA,Maharashtra</span>
                  </p>
                </div>
                <div className="flex justify-center align-middle bg-red-200 flex-row gap-x-7">
                  <div className="w-8 h-8 bg-red-400 flex justify-center align-middle">
                    a
                  </div>
                  <div className="w-8 h-8 bg-red-400 flex justify-center align-middle">
                    b
                  </div>
                  <div className="w-8 h-8 bg-red-400 flex justify-center align-middle">
                    c
                  </div>
                  <div className="w-8 h-8 bg-red-400 flex justify-center align-middle">
                    d
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-amber-200 flex justify-center align-middle">
              <button className="p-2 text-xl font-mono bg-violet-500 text-gray-200">
                Let's talk
              </button>
            </div>
          </div>
        </div>
  )
}

export default PersonalCard