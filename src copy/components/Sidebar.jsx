import React from 'react'
import { SiDiscord } from "react-icons/si";
import { DiGithubBadge, } from "react-icons/di";
import { RiHomeHeartFill,RiInboxArchiveLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { BsPersonVcardFill,BsFillHeartPulseFill } from "react-icons/bs";
import { BiTachometer } from "react-icons/bi";


export const Sidebar = () => {
  return (
    <div className="fixed top-16 h-screen w-48 m-0 my-auto felx flex-col bg-gray-900 text-white shadow-lg"  >
        {/* <SidebarIcon icon={<SiDiscord size="36"/>}/>
        <SidebarIcon icon={<DiGithubBadge size="36"/>}/>
        <SidebarIcon icon={<RiHomeHeartFill size="36"/>}/>
        <SidebarIcon icon={<RiInboxArchiveLine size="36"/>}/>
        <SidebarIcon icon={<FaPlus size="28"/>}/> */}

        <div className='flex flex-row'>
        <SidebarIcon icon={<BsPersonVcardFill size="36"/>} id='1'/> 
        <p className='m-auto'>Your Profile</p>

        
        </div>
        <div className='flex flex-row'>
        <SidebarIcon icon={<BiTachometer size="40"/>} id='2'/>     
        <p className='m-auto'>Risk Score</p>
  
          </div>
        <div className='flex flex-row'>
        <SidebarIcon icon={<BsFillHeartPulseFill size="36" />} id='3'/>  
        <p className='m-auto'>Health Data</p>
     
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