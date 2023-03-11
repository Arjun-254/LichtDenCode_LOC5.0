import React, { useState } from 'react';
import Webcam from "react-webcam";


 const WebcamComponent = () => <Webcam />;

 const videoConstraints = {
     width: 200,
     height: 200,
     facingMode: "user",
     mirrored:'False'
 };

 export const WebcamCapture = () => {

     const [image,setImage]=useState('');
     const webcamRef = React.useRef(null);


     const capture = React.useCallback(
         () => {
         const imageSrc = webcamRef.current.getScreenshot();
         setImage(imageSrc)
         
         
         localStorage.setItem('image',imageSrc)
     
         });
     return (
         <div className="webcam-container ">
             <div className="webcam-img flex justify-center">

                 {image == '' ? <Webcam
                     audio={false}
                     height={400}
                     ref={webcamRef}
                     screenshotFormat="image/jpeg"
                     width={420}
                     mirrored='true'
                     videoConstraints={videoConstraints}
                 /> : <img src={image} />}
             </div>
             <div>
                 {image != '' ?
                     <button onClick={(e) => {
                         e.preventDefault();
                         setImage('')
                     }}
                         className="webcam-btn btn m-3 text-white hover:bg-violet-800 bg-violet-600 border-violet-600">
                         Retake Image</button> :
                     <button onClick={(e) => {
                         e.preventDefault();
                         capture();
                     }}
                         className="webcam-btn btn m-3 text-white hover:bg-violet-800 bg-violet-600 border-violet-600">Capture</button>
                 }
             </div>
         </div>
     );
 };