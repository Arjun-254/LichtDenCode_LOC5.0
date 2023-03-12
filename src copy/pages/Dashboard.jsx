import React ,{useState} from 'react'
import Landing from '../components/Landing'
import NavbarLOC from '../components/NavbarLOC'
import { Sidebar } from '../components/Sidebar'
import { YourProfile } from '../components/YourProfile'
import { BsPersonVcardFill,BsFillHeartPulseFill } from "react-icons/bs";
import { BiTachometer } from "react-icons/bi";
import { RiskScore } from '../components/RiskScore'
import { HealthData } from '../components/HealthData'
import Gauge from '../components/Gauge'

export const Dashboard = () => {
  const[selectDash,setSelectDash] = useState("")
  const renderSelectedDash = () => {
    switch (selectDash) {
      case "YourProfile":
        return <YourProfile />;
      case "RiskScore":
        return <Gauge />;
      case "HealthData":
        return <HealthData />;
      default:
        return <YourProfile/>;
    }
  };
  return (
    <div>
        <Landing/>
        <div className='flex'>
        <NavbarLOC/>
        <div className='flex flex-col'>
        <div>
        <div className="fixed top-16 h-screen w-48 m-0 my-auto felx flex-col bg-gray-900 text-white shadow-lg"  >
        {/* <SidebarIcon icon={<SiDiscord size="36"/>}/>
        <SidebarIcon icon={<DiGithubBadge size="36"/>}/>
        <SidebarIcon icon={<RiHomeHeartFill size="36"/>}/>
        <SidebarIcon icon={<RiInboxArchiveLine size="36"/>}/>
        <SidebarIcon icon={<FaPlus size="28"/>}/> */}
        <button onClick={()=>{setSelectDash("YourProfile")}}>
        <div className='flex flex-row' >
        <SidebarIcon icon={<BsPersonVcardFill size="36"/>} id='1'/> 
        <p className='m-auto'>Your Profile</p>
        </div>
        </button>
        <button onClick={()=>{setSelectDash("RiskScore")}}>
        <div className='flex flex-row' >
        <SidebarIcon icon={<BiTachometer size="40"/>} id='2'/>     
        <p className='m-auto'>Risk Score</p>
          </div>
          </button>

<button onClick={()=>{setSelectDash("HealthData")}}>
        <div className='flex flex-row'>
          
        <SidebarIcon icon={<BsFillHeartPulseFill size="36" />} id='3'  />  
        <p className='m-auto'>Health Data</p>
        
        </div>
        </button>
    </div>
        </div>
        {renderSelectedDash()}
        </div>
        </div>
    </div>

  )
}
const SidebarIcon=({icon,text='tooltip',lineThing})=>(
  <div className='sidebar-icon group '>
   {icon}
   {/* <span className='sidebar-tooltip group-hover:scale-100'>
       {text}
   </span> */}
   <div className='sidebar-lineThing group-hover:scale-100 group-hover:h-5 group-hover:p-0.5 group-hover:rounded-br-sm group-hover:rounded-tr-sm group-focus:h-8'>
       {lineThing}
   </div>
  </div>
)
