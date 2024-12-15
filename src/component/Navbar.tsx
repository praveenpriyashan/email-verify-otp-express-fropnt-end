import React from "react";
import {assets} from '../assets/assets.js'
import {useNavigate} from "react-router-dom";


const Navbar = () => {
const navigate=useNavigate();

    return (
        <div className={'w-full flex justify-between items-center p-4 sm:p-6 sm:px-24 absolute top-0'}>
            <img src={assets.logo} alt={"logo"} className={'w-28 sm:w-32'}/>
            <button
                className={'flex items-center gap-2 border border-gray-500 rounded-full px-6 py-2 hover:bg-gray-100 ' +
                    'transition-all text-sm'} onClick={()=>{
                        navigate('/Login')
            }}>Login
                <img src={assets.arrow_icon} alt={"arraow"}/>
            </button>
        </div>
    )
}

export default Navbar