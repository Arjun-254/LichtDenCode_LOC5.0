import React from 'react'
import { useNavigate } from "react-router-dom";
import Landing from '../components/Landing'
import Navbar2LOC from '../components/Navbar2LOC'
import { Typewriter } from 'react-simple-typewriter'
import Home from '../components/Homecomp'

export const SignUp2 = () => {
    const navigate = useNavigate()
    return (
    <div className='container'>
        <Landing/>
        <Navbar2LOC/>
        <div className='container absolute'>
        <h1 className="text-3xl font-bold mb-2 text-white mt-24">
          <Typewriter
            words={['SignUp']}
            cursor
            cursorStyle='_'
            loop ={0}
          />
        </h1>
       
        <div className='container absolute mt-8' >
        <div className=''>
        <Home/>
        </div>
            <div className='row'>
        <div className=' mx-auto col-md-6 '></div>
        <div className="container absolute mx-auto col-md-6 mt-2">
       <button type="button" className="btn m-5 text-white hover:bg-violet-800 bg-violet-600 border-violet-600 " onClick={()=>{navigate("/register")}}> &larr; Previous</button>
       {/* <button  type="button" className="btn m-5 text-white hover:bg-violet-800 bg-violet-600 border-violet-600" onClick={()=>{navigate("/")}}>Submit &rarr;</button> */}

       </div>
        </div>
        </div>
        </div>
        

    </div>
  )
}
export default SignUp2