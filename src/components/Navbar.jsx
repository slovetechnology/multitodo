import React from 'react'
import img from '../assets/images/avatar.png'
import { FaArrowLeft, FaEllipsisV, FaSearch } from 'react-icons/fa'
import { useAtom } from 'jotai'
import { MEDIASCREEN, SCREEN } from './store'

const Navbar = () => {
    const [screen, setScreen] = useAtom(SCREEN)
    const [screen2, setScreen2] = useAtom(MEDIASCREEN)

    const handleViews = () => {
        // test for small screens
        if(window.innerWidth < 600) {
            setScreen2(false)
        }else {
            setScreen2(false)
        }
    }
    return (
        <div className='bg-main text-slate-300'>
            <div className="flex items-center justify-between w-11/12 mx-auto py-1">
                <div className="flex items-center gap-2">
                    <button onClick={handleViews} className='lg:hidden text-2xl'> <FaArrowLeft /> </button>
                    <div onClick={() => setScreen(true)} className="flex cursor-pointer items-center gap-2">
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
    )
}

export default Navbar