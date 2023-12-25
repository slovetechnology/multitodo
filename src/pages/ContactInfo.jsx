import React from 'react'
import img from '../assets/images/avatar.png'
import { FaEllipsisV, FaSearch, FaTimes } from 'react-icons/fa'
import { useAtom } from 'jotai'
import { MOBILECONTACT, SCREEN } from '../components/store'

const ContactInfo = () => {
    const [screen, setScreen] = useAtom(SCREEN)
    const [screen3, setScreen3] = useAtom(MOBILECONTACT)
    return (
        <div className=''>

            <div className='bg-main text-slate-300'>
                <div className="flex items-center w-11/12 gap-6 mx-auto p-4">
                    <button onClick={() => {setScreen(!SCREEN); setScreen3(!MOBILECONTACT)}} className='text-slate-500 text-2xl'> <FaTimes /> </button>
                    <div className="capitalize font-semibold text-2xl">Contact</div>
                </div>
            </div>
            <div className="mb-2 bg-side">
                <div className="w-11/12 mx-auto flex flex-col items-center justify-center gap-3 py-10">
                    <img src={img} alt="" />
                    <div className="text-white font-semibold text-xl">Lorem ipsum dolor sit, amet consecte</div>
                    <div className="text-lg text-slate-500">+234069594003032</div>
                </div>
            </div>
            <div className="mb-2 bg-side">
                <div className="w-11/12 mx-auto py-5">
                    <div className="text-slate-500 font-semibold mb-3">About</div>
                    <div className="text-white">Hey there!, you've reached George, leave a message</div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo