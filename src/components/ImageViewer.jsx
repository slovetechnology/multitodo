import React, { useEffect, useRef, useState } from 'react'
import screens from '../assets/images/screens.png'
import { BiAlarmExclamation, BiCommentDetail, BiPhone } from 'react-icons/bi'
import { FaArrowLeft, FaExclamationCircle, FaPhoneAlt, FaVideo } from 'react-icons/fa'
import { BsCameraVideoFill, BsExclamationCircle } from 'react-icons/bs'

const ImageViewer = ({ closeView }) => {
    const [zone, setZone] = useState(0)
    const togref = useRef()

    useEffect(() => {
        togref && window.addEventListener('click', e => { togref.current !== null && !togref.current.contains(e.target) && closeView() }, true)
    }, [])
    return (
        <>
            {zone === 1 && <div ref={togref} className="bg-dark z-10 fixed top-0 left-0 w-full h-screen">
                <div className="w-full max-w-3xl mx-auto h-full">
                    <div className="flex items-center gap-5 text-white p-3">
                        <FaArrowLeft onClick={closeView} className='cursor-pointer' />
                        <div className="text-white text-lg">Lorem ipsum dolor sit amet consectetur</div>
                    </div>
                    <div className="w-full h-full -mt-20 flex items-center justify-center">
                        <img src={screens} alt="" />
                    </div>
                </div>
            </div>}

            <div className={zone === 0 ? '' : 'hidden'}>
                <div className='fixed top-0 left-0 w-full z-10 h-screen bg-sub/80'>
                    <div ref={togref} className="w-11/12 max-w-lg mx-auto relative mt-20">
                        <div className="bg-sub/80 absolute top-0 left-0 w-full p-3 text-white">Lorem ipsum dolor sit amet.</div>
                        <div className="block cursor-pointer">
                            <img onClick={() => setZone(1)} src={screens} alt="" className='w-full h-[20rem] object-cover' />
                        </div>
                        <div className="bg-side p-4 flex items-center justify-around">
                            <button className='text-check text-2xl'> <BiCommentDetail /> </button>
                            <button className='text-check text-2xl'> <FaPhoneAlt /> </button>
                            <button className='text-check text-2xl'> <FaVideo /> </button>
                            <button className='text-check text-2xl'> <BsExclamationCircle /> </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageViewer