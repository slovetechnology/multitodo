import React from 'react'
import { FaArrowLeft, FaEllipsisV, FaSearch } from 'react-icons/fa'
import img from '../assets/images/avatar.png'
import { ACTIVEROUTE, ROUTES } from '../components/store'
import { BiDislike, BiLike } from 'react-icons/bi'
import { BsChatLeft } from 'react-icons/bs'
import img1 from '../assets/images/screens.png'
import { useAtom } from 'jotai'
import FeedsButtons from '../components/FeedsButtons'

const SingleFeed = () => {
    const [routes, setRoutes] = useAtom(ROUTES)
    const [active, setActive] = useAtom(ACTIVEROUTE)
    return (
        <div className='bg-side'>
            <div className=' text-slate-300'>
                <div className="flex items-center justify-between w-11/12 mx-auto py-1">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setActive(routes.allFeeds)} className='text-2xl'> <FaArrowLeft /> </button>
                        <div className="flex cursor-pointer items-center gap-2">
                            <img src={img} alt="" className="w-10 lg:w-14 h-10 lg:h-14 rounded-full object-cover" />
                            <div className="">
                                <div className="font-bold text-lg text-white"> Lorem ipsum dolor... </div>
                                <div className="text-xs">Last seen today  10:53AM</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row tems-center gap-5 lg:gap-10 text-xl">
                        <button> <FaSearch /> </button>
                        <button> <FaEllipsisV /> </button>
                    </div>
                </div>
            </div>
            <div className="overflow-y-auto h-screen pb-20 lg:w-11/12 mx-auto">
                <div onClick={() => setActive(routes.singleFeeds)} className="bg-side cursor-pointer"> <img src={img1} alt="" className="w-full h-[20rem] object-contain" /> </div>
                <div className="p-3">
                    <FeedsButtons />
                    <div className="text-slate-200 font-semibold whitespace-pre-wrap">
                        {` 
Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam impedit minus, distinctio numquam Lorem ipsum, dolor sit amet consectetur adipisicing elit. 

Tempore soluta ratione ipsum obcaecati quibusdam nesciunt vitae tempora sunt eveniet at aut est, laudantium voluptate quia cupiditate et! Consequuntur, necessitatibus quas.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam impedit minus, distinctio numquam Lorem ipsum, dolor sit amet consectetur adipisicing elit. 

Tempore soluta ratione ipsum obcaecati quibusdam nesciunt vitae tempora sunt eveniet at aut est, laudantium voluptate quia cupiditate et! Consequuntur, necessitatibus quas.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam impedit minus, distinctio numquam Lorem ipsum, dolor sit amet consectetur adipisicing elit. 

Tempore soluta ratione ipsum obcaecati quibusdam nesciunt vitae tempora sunt eveniet at aut est, laudantium voluptate quia cupiditate et! Consequuntur, necessitatibus quas.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam impedit minus, distinctio numquam Lorem ipsum, dolor sit amet consectetur adipisicing elit. 

Tempore soluta ratione ipsum obcaecati quibusdam nesciunt vitae tempora sunt eveniet at aut est, laudantium voluptate quia cupiditate et! Consequuntur, necessitatibus quas.
`}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleFeed