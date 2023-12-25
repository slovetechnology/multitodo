import React from 'react'
import img from '../assets/images/screens.png'
import logo from '../assets/images/avatar.png'
import { FaEllipsisV, FaGlobe } from 'react-icons/fa'
import { BiDislike, BiLike } from 'react-icons/bi'
import { BsChatLeft } from 'react-icons/bs'

const AllFeeds = () => {
    return (
        <>
            {new Array(20).fill(0).map((item, i) => (
                <div className="bg-main mt-3">
                    <div className="grid grid-cols-7 p-2">
                        <div className="flex items-center col-span-6 gap-2">
                            <img src={logo} alt="" className="w-10 h-10 rounded-full object-cover" />
                            <div className="">
                                <div className="text-white">Lorem ipsum dolor sit amet.</div>
                                <div className="flex items-center text-slate-400 text-xs"> <FaGlobe />2023-02-03 05:16 AM </div>
                            </div>
                        </div>
                        <div className="w-fit ml-auto pt-2">
                            <button className='text-slate-400 text-xl'> <FaEllipsisV /> </button>
                        </div>
                    </div>
                    <div className="bg-side"> <img src={img} alt="" className="w-full h-[20rem] object-contain" /> </div>
                    <div className="p-3">
                        <div className="text-slate-200 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam impedit minus, distinctio numquam</div>
                        <div className="grid grid-cols-3 gap-3 mt-3">
                            <button className="border rounded-md py-3 flex items-center justify-center text-lg gap-1 text-slate-400"> <BiLike className='text-2xl' />: 300 </button>
                            <button className="border rounded-md py-3 flex items-center justify-center text-lg gap-1 text-slate-400"> <BiDislike className='text-2xl' />: 5K </button>
                            <button className="border rounded-md py-3 flex items-center justify-center text-lg gap-1 text-slate-400"> <BsChatLeft />: 900K </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default AllFeeds