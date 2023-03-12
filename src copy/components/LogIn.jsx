import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

export const LogIn = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
        
    }
 
    return (

   
    <div>
        
        <input className=""  type="text" label="Username/Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        className=""
        type="password"
        label="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
       <button type="submit"  onClick ={handleSubmit} className="cursor-pointer">
             Login
      </button>
    </div>
  )
}
export default LogIn;