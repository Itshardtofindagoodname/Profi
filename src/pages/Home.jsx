import React from 'react'

function Home() {
  return (
      <div className="m-2 h-full">
        <div className="w-full h-full p-6 bg-white shadow-lg rounded-xl">
          <div className="flex flex-col h-full">
            <span className="text-gray-700 text-5xl font-bold">
              Chat it up
            </span>
            <span className="text-md font-light text-gray-400 mb-2">
                  Talk with your given Data
            </span>
            <div className="w-full px-3 py-2 mb-3 border border-gray-300 rounded-lg h-full"/>
            <div className='flex flex-row gap-2'>
              <textarea placeholder="Enter your message" className="w-full no-scrollbar px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" rows="1"></textarea>
              <button type="button" className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-20 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                Submit
              </button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Home