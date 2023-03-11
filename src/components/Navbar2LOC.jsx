import React from 'react'
import { useNavigate } from "react-router-dom";

export default function NavbarLOC() {
    const navigate = useNavigate()
    return ( 

    <div className=''>
        <header className="absolute inset-x-0 top-0 z-50 bg-gradient-to-r from-gray-600 to-gray-900">
        <nav className="flex items-center justify-between p-2 mb-1 lg:px-8 " aria-label="Global">
        <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </a>
        </div>
        <div className="flex lg:hidden">
            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            </button>
        </div>
        <div className=" justify-center text-center lg:flex lg:gap-x-12 align-middle">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-200 hover:font-extrabold hover:shadow-xl transition-all ease-in duration-100 p-2 rounded-lg" onClick={()=>{navigate("/")}}>Home</a>

            <a href="#" className="text-sm font-semibold leading-6 text-gray-200 hover:font-extrabold hover:shadow-xl transition-all ease-in duration-100 p-2 rounded-lg">Find Jobs</a>

            <a href="#" className="text-sm font-semibold leading-6 text-gray-200 hover:font-extrabold hover:shadow-xl transition-all ease-in duration-100 p-2 rounded-lg">Employers</a>

            <a href="#" className="text-sm font-semibold leading-6 text-gray-200 hover:font-extrabold hover:shadow-xl transition-all ease-in duration-100 p-2 rounded-lg">About</a>
        </div>
        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-200 mr-2 p-2 hover:bg-violet-600 rounded-md transition-all duration-500 ease-in-out border-2 border-violet-600" >Sign Up <span aria-hidden="true"></span></a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-200 p-2 hover:bg-violet-600 rounded-md transition-all duration-500 ease-in-out border-2  border-violet-600" onClick={()=>{navigate("/login")}}>Log in <span aria-hidden="true">&rarr;</span></a>
        </div> */}
        </nav>
        
        <div className="lg:hidden" role="dialog" aria-modal="true">
        
        <div className="fixed inset-0 z-50"></div>
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </a>
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            </div>
            <div className="mt-6 flow-root bg-gre">
            <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-200 hover:font-extrabold hover:shadow-xl transition-all ease-in duration-100 p-2 bg-gradient-to-r from-grey-600 to-grey-900" onClick={()=>{navigate("/")}}>Home</a>

                <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-200 hover:font-extrabold hover:shadow-xl transition-all ease-in duration-100 p-2 bg-gradient-to-r from-grey-600 to-grey-900">Find Jobs</a>

                <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-200 hover:font-extrabold hover:shadow-xl transition-all ease-in duration-100 p-2 bg-gradient-to-r from-grey-600 to-grey-900">Employers</a>

                <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-200 hover:font-extrabold hover:shadow-xl transition-all ease-in duration-100 p-2 bg-gradient-to-r from-grey-600 to-grey-900">About Us</a>
                </div>
                {/* <div className="py-6">
                <a href="#" className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-200 hover:font-extrabold hover:shadow-xl transition-all ease-in duration-100 p-2 bg-gradient-to-r from-grey-600 to-grey-900'">Log In</a>

                <a href="#" className="-mx-3 m-1 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-200 hover:font-extrabold hover:shadow-xl transition-all ease-in duration-100 p-2 bg-gradient-to-r from-grey-600 to-grey-900'">Sign Up</a>
                </div> */}
            </div>
            </div>
        </div>
        </div>
    </header>

    </div>
  )
}
