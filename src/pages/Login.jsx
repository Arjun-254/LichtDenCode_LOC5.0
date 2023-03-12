import React,{useEffect,useState,useRef} from 'react'
import axios from 'axios'
//import{ useRef } from 'react';
//import { Canvas, useThree } from 'react-three-fiber';
//import { OrbitControls, Stars } from '@react-three/drei'
import {Link ,useNavigate} from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'
import Landing from '../components/Landing';
import Navbar2LOC from '../components/Navbar2LOC';
import Home from "../components/Homecomp";
import * as faceapi from 'face-api.js'

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
  const navigate=useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    var imageData = localStorage.getItem('myImage');
    var img = new Image();
    img.src = "data:image/png;base64," + imageData;

    const idCardRef = useRef();
    const selfieRef = useRef();
    const isFirstRender = useRef(true);

    const renderFace = async (img, x, y, width, height) => {
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext("2d");
  
      context?.drawImage(img, x, y, width, height, 0, 0, width, height);
      canvas.toBlob((blob) => {
        img.src = URL.createObjectURL(blob);
      }, "image/jpeg");
    };
  
    useEffect(() => {
      // Prevent the function from executing on the first render
      if (isFirstRender.current) {
        isFirstRender.current = false; // toggle flag after first render/mounting
        return;
      }
  
      (async () => {
        // loading the models
        await faceapi.nets.ssdMobilenetv1.loadFromUri('/models');
        await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
        await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
        await faceapi.nets.faceRecognitionNet.loadFromUri('/models');
        await faceapi.nets.faceExpressionNet.loadFromUri('/models');
  
        // detect a single face from the ID card image
        const idCardFacedetection = await faceapi.detectSingleFace(idCardRef.current,
          new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks().withFaceDescriptor();
  
        // detect a single face from the selfie image
        const selfieFacedetection = await faceapi.detectSingleFace(selfieRef.current,
          new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks().withFaceDescriptor();
  
        //(OPTIONAL)
        /**
         * If a face was detected from the ID card image,
         * call our renderFace() method to display the detected face.
         */
        if (idCardFacedetection) {
          const { x, y, width, height } = idCardFacedetection.detection.box;
          renderFace(idCardRef.current, x, y, width, height);
        }
        //(OPTIONAL)
        /**
         * If a face was detected from the selfie image,
         * call our renderFace() method to display the detected face.
         */
        if (selfieFacedetection) {
          const { x, y, width, height } = selfieFacedetection.detection.box;
          renderFace(selfieRef.current, x, y, width, height);
        }
  
        /**
         * Do face comparison only when faces were detected
         */
        if(idCardFacedetection && selfieFacedetection){
          // Using Euclidean distance to comapare face descriptions
          const distance = faceapi.euclideanDistance(idCardFacedetection.descriptor, selfieFacedetection.descriptor);
          console.log(distance);
        }
  
      })();
    }, [])
  
  
    const handleSubmit = (e) => {
      e.preventDefault();

      if(localStorage.getItem("email")===email && localStorage.getItem("password")===password)
      {
          navigate("/dashboard")
      }
    };
  
    return (
       
        <div className="flex flex-col items-center justify-center h-screen bg-[#EEE9F6] text-black">
         <Landing/>
        <Navbar2LOC/>
        <div className='absolute'>
        <h1 className="text-3xl font-bold mb-4 mt-6 text-white">
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
          <Home/>

          <button type="submit" className="bg-violet-600 text-white py-2 px-4 rounded hover:bg-violet-800" onClick={handleSubmit}>
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