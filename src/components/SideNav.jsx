import React from 'react'
import img from '../assets/images/avatar.png'
import { FaEllipsisV, FaSearch } from 'react-icons/fa'
import { MdFilterList } from 'react-icons/md'
import AllChats from '../pages/AllChats'

const SideNav = () => {
    return (
        <div>
            <div className='bg-main text-slate-300'>
                <div className="flex items-center justify-between w-11/12 mx-auto py-1">
                    <div className="flex items-center gap-2">
                        <img src={img} alt="" className="w-14 h-14 rounded-full object-cover" />
                        <div className="">
                        </div>
                    </div>
                    <div className="flex flex-row tems-center gap-10 text-xl">
                        <button> <FaSearch /> </button>
                        <button> <FaEllipsisV /> </button>
                    </div>
                </div>
            </div>
            <div className="py-2">
                <div className="bg-main  w-11/12 mx-auto rounded-lg flex items-center gap-2 px-3">
                    <FaSearch className='text-slate-400' />
                    <input type="text" placeholder='Search or start a new text' className="outline-none w-full text-slate-400 bg-transparent p-2 border-none rounded-lg" />
                    <MdFilterList className='text-2xl text-slate-400' />
                </div>
            </div>
            <div className="h-[84.5vh] mt-auto overflow-y-auto pb-20">
                <AllChats />
            </div>
        </div>
    )
}

export default SideNav