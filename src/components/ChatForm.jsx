
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { CiPaperplane } from 'react-icons/ci'
import InputEmoji from "react-input-emoji";

const ChatForm = () => {
    const [content, setContent] = useState('')
    const handleOnEnter = val => {
        console.log(val, 'from input')
    }
    return (
        <div className='bg-main text-slate-300 py-2'>
            <div className="flex items-center gap-3 w-11/12 mx-auto">
                <button className='text-2xl text-slate-400'> <FaPlus /> </button>
                <InputEmoji
                    value={content}
                    onChange={setContent}
                    cleanOnEnter
                    onEnter={handleOnEnter}
                    placeholder="Type a message"
                />
                <button className='text-3xl rounded-full p-2 flex items-center justify-center'> <CiPaperplane /> </button>
            </div>
        </div>
    )
}

export default ChatForm