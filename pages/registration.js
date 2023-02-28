import React,{useState} from 'react'

const Registration = () => {

    const [login,setLogin]=useState(true)

  return (
<section className="flex justify-center items-center h-screen home">
    <div className="max-w-md w-full bg-gray-900 rounded p-6 space-y-4">
        <div className="mb-4">
            <p className="text-gray-400">{login?"Sign In":"Sign Up"}</p>
            <h2 className="text-xl font-bold text-white">to find voyage</h2>
        </div>
        {!login&&<div>
            <input className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Full Name"/>
        </div>}
        <div>
            <input className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Email"/>
        </div>
        <div>
            <input className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="password" placeholder="Password"/>
        </div>
        {!login&&<div>
            <input className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="password" placeholder="Confirm Password"/>
        </div>}
        <div>
            <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">{login?"Sign In":"Sign Up"}</button>
        </div>
        <div className="flex items-center justify-between">
            <div className="flex flex-row items-center">
                <input type="checkbox" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"/>
                <label htmlFor="comments" className="ml-2 text-sm font-normal text-gray-400">Remember me</label>
            </div>
            <div>
                <a className="text-sm text-blue-600 hover:underline">Forgot password?</a>
            </div>
        </div>
        <div>
            <p className='text-white'><span>{login?"Dont have an Account?":"Already have an Account?"}</span><span onClick={()=>{setLogin(!login)}} className='text-blue-600 hover:underline ml-2'>{login?"Register Here":"Login Here"}</span></p>
        </div>
    </div>
</section>
  )
}

export default Registration