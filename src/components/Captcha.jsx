import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha';

export default function MyComponent()
{
  const key="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
  const [captchaIsDone,setCaptchaDone]=useState(false);
  function onChange()
  {
      console.log('changed')
      setCaptchaDone(true)
  }
   return (
    <div>
      <ReCAPTCHA
        sitekey={key}
        onChange={onChange}
      />
      {captchaIsDone && <button>Submit</button>}
    </div>
  );
};
