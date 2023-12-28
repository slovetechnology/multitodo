import React from 'react'
import img from '../assets/images/screens.png'
import logo from '../assets/images/avatar.png'
import { FaEllipsisV, FaGlobe } from 'react-icons/fa'
import { useAtom } from 'jotai'
import { ACTIVEROUTE, ROUTES } from '../components/store'
import FeedsButtons from '../components/FeedsButtons'

const AllFeeds = () => {
    const [routes, setRoutes] = useAtom(ROUTES)
    const [active, setActive] = useAtom(ACTIVEROUTE)

    const handleSingleFeed = () => {
        if (window.innerWidth < 1000) {
            setActive(routes.singleFeeds)
        }else {
            setActive(routes.singleFeeds)
        }
    }

    return (
        <>
            {new Array(20).fill(0).map((item, i) => (
                <div className="bg-main mt-3" key={i}>
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
                    <div onClick={handleSingleFeed} className="bg-side cursor-pointer"> <img src={img} alt="" className="w-full h-[20rem] object-contain" /> </div>
                    <div className="p-3">
                        <div className="text-slate-200 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam impedit minus, distinctio numquam</div>
                        <FeedsButtons />
                    </div>
                </div>
            ))}
        </>
    )
}

export default AllFeeds