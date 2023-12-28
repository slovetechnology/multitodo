


import React, { useState } from 'react'
import { CiPaperplane } from 'react-icons/ci'
import InputEmoji from "react-input-emoji";

const FeedCommentForm = () => {
    const [content, setContent] = useState('')
    const handleOnEnter = val => {
        console.log(val, 'from input')
    }
    return (
        <div className='text-slate-300 py-2'>
            <div className="flex items-center gap-3">
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

export default FeedCommentForm