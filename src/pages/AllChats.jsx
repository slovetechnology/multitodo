import React, { useState } from 'react'
import img from '../assets/images/avatar.png'
import ImageViewer from '../components/ImageViewer'
import { MEDIASCREEN } from '../components/store'
import { useAtom } from 'jotai'

const AllChats = () => {
    const [show, setShow] = useState(false)
    const [screen2, setScreen2] = useAtom(MEDIASCREEN)

    const handleViews = () => {
        // test for small screens
        if(window.innerWidth < 600) {
            setScreen2(true)
        }else {
            setScreen2(false)
        }
    }
    return (
        <div>
            {show && <ImageViewer closeView={() => setShow(false)} /> }
            {new Array(50).fill(0).map((item, i) => (
                <div className="flex items-center gap-3 pt-2 px-2 hover:bg-main" key={i}>
                    <img onClick={() => setShow(!show)} src={img} alt="" className="w-16 h-16 rounded-full object-cover cursor-pointer" />
                    <div onClick={handleViews} className="border-b border-slate-500 w-full cursor-pointer text-slate-400 grid grid-cols-7 gap-1 pb-5 pr-2 pt-2">
                        <div className="flex flex-col col-span-6">
                            <div className="text-white font-semibold text-lg truncate">Chat username Lorem, ipsum.</div>
                            <div className="text-sm -mt-2 truncate"> Lorem ipsum dolor sit, amet consectet Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, reprehenderit! ... </div>
                        </div>
                        <div className="text-xs text-right">
                            <div className="mb-1">10:43AM</div>
                            <div className="w-fit ml-auto"><div className="bg-badge p-1 rounded-full w-fit h-fit text-black">99</div></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AllChats