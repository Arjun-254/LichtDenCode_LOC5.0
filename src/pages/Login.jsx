import React,{useState} from 'react'
import axios from 'axios'
//import{ useRef } from 'react';
//import { Canvas, useThree } from 'react-three-fiber';
//import { OrbitControls, Stars } from '@react-three/drei'
import {Link} from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'
import Landing from '../components/Landing';
import Navbar2LOC from '../components/Navbar2LOC';

// const Starfield = () => {
//   const cameraRef = useRef();
//   const { gl, camera } = useThree();

//   return (
//     <>
//       <Stars radius={100} depth={50} count={5000} factor={4} />
//       <OrbitControls args={[camera, gl.domElement]} />
//       <perspectiveCamera
//         ref={cameraRef}
//         position={[0, 0, 5]}
//         fov={75}
//         aspect={window.innerWidth / window.innerHeight}
//         near={0.1}
//         far={1000}
//       />
//     </>
//   );
// };

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const handleVerify =(e)=>{
    //   axios.post('127.0.0.1:8000/accounts/login/', {
    //         email: email,
    //         password: password
    //     }).then(result =>{
    //   axios.post('127.0.0.1:8000/accounts/email-verification/',{
    //     headers: {
    //       Authorization: `Bearer ${result.data.access}`
    //     }
    //   }).then(result => {
    //     console.log(result.data)
    //   }).catch(error => {
    //     console.log(error)
    //   })})
    // }

    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://127.0.0.1:8000/accounts/login/', {
            email: email,
            password: password
        }).then(result => {
            console.log(result)
            const token = result.data.access
            console.log(token)
            axios.get('http://127.0.0.1:8000/accounts/user/', {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }).then(result => {
              console.log(result.data)
            }).catch(error => {
              console.log(error)
            })
          
        }).catch(error => {
            alert('service error')
            console.log(error)
        })
    };
  
    return (
       
        <div className="flex flex-col items-center justify-center h-screen bg-[#EEE9F6] text-black">
         <Landing/>
        <Navbar2LOC/>
        <div className='absolute'>
        <h1 className="text-3xl font-bold mb-4 text-white">
          <Typewriter
            words={['Login']}
            cursor
            cursorStyle='_'
            loop ={0}
          />
        </h1>
        <form onSubmit={handleSubmit} className="w-96">
          <div className="mb-4">
            <label htmlFor="email" className="flex mb-2 font-bold text-white">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-400 p-2 w-full rounded-lg bg-violet-200 placeholder-black text-black"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="flex  mb-2 font-bold text-white">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-400 p-2 w-full rounded-lg bg-violet-200 placeholder-black text-black "
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="bg-violet-600 text-white py-2 px-4 rounded hover:bg-violet-800">
            Login
          </button>
        </form>
        
        <p className="mt-4 text-white">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-500">
            SignUp
          </Link>
        </p>
        </div>
      </div>
    );
}
export default Login;