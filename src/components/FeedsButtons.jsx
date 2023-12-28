import { useAtom } from 'jotai'
import React, { useState } from 'react'
import { BiDislike, BiLike } from 'react-icons/bi'
import { BsChatLeft } from 'react-icons/bs'
import FeedCommentForm from './FeedCommentForm'

const FeedsButtons = () => {
    const [liked, setLiked] = useState(false)
    const [disliked, setDisliked] = useState(false)
    const [feedform, setFeedform] = useState(false)
    return (
        <>
            <div className="grid grid-cols-3 gap-3 mt-3">
                <button onClick={() => setLiked(!liked)} className={`border rounded-md py-2 flex items-center justify-center text-base gap-1 ${liked ? 'text-badge border-badge' : 'text-slate-400'}`}> <BiLike className='text-2xl' />: 300 </button>
                <button onClick={() => setDisliked(!disliked)} className={`border rounded-md py-2 flex items-center justify-center text-base gap-1 ${disliked ? 'text-red-400 border-red-400' : 'text-slate-400'}`}> <BiDislike className='text-2xl' />: 5K </button>
                <button onClick={() => setFeedform(!feedform)} className="border rounded-md py-2 flex items-center justify-center text-base gap-1 text-slate-400"> <BsChatLeft />: 900K </button>
            </div>
            {
                feedform && <div className="">
                    <FeedCommentForm />
                </div>
            }
        </>
    )
}

export default FeedsButtons