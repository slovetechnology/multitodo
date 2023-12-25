import React from 'react'
import { BiCheckDouble } from 'react-icons/bi'

const Messages = () => {
    return (
        <div className='py-7 px-5 lg:px-8'>
            {new Array(3).fill(0).map((item, i) => (
                <div className="" key={i}>

                    {/* outgoing */}
                    <div className="w-[95%] lg:w-[70%] ml-auto mb-1">
                        <div className="bg-outgoing w-fit ml-auto rounded-lg p-2 relative">
                            <div className="outgoes"></div>
                            <div className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione natus pariatur quae animi, rem ut sequi aliquam, molestias provident facere adipisci cum soluta incidunt laudantium quasi, blanditiis sed similique id.</div>
                            <div className="flex items-center justify-end gap-1">
                                <div className="text-xs text-slate-300">11:23 AM</div>
                                <BiCheckDouble className='text-check text-2xl' />
                            </div>
                        </div>
                    </div>
                    <div className="w-[95%] lg:w-[70%] ml-auto mb-1">
                        <div className="bg-outgoing w-fit ml-auto rounded-lg p-2">
                            <div className="text-white">Lorem,</div>
                            <div className="flex items-center justify-end gap-1">
                                <div className="text-xs text-slate-300">11:23 AM</div>
                                <BiCheckDouble className='text-check text-2xl' />
                            </div>
                        </div>
                    </div>
                    <div className="w-[95%] lg:w-[70%] ml-auto mb-1">
                        <div className="bg-outgoing w-fit ml-auto rounded-lg p-2">
                            <div className="text-white">Lorem, Lorem ipsum dolor sit amet, consectetur adipisicing </div>
                            <div className="flex items-center justify-end gap-1">
                                <div className="text-xs text-slate-300">11:23 AM</div>
                                <BiCheckDouble className='text-check text-2xl' />
                            </div>
                        </div>
                    </div>
                    <div className="bg-incoming py-2 px-3 rounded-lg w-fit mx-auto my-5 text-slate-400 uppercase text-sm font-semibold">Today</div>
                    {/* incoming */}
                    <div className="w-[95%] lg:w-[70%] mr-auto mb-1">
                        <div className="bg-incoming w-fit mr-auto rounded-lg p-2 relative">
                            <div className="incomes"></div>
                            <div className="text-white">Lorem, Lorem ipsum dolor sit amet. </div>
                            <div className="flex items-center justify-end gap-1">
                                <div className="text-xs text-slate-300">11:23 AM</div>
                                <BiCheckDouble className='text-check text-2xl' />
                            </div>
                        </div>
                    </div>
                    <div className="w-[95%] lg:w-[70%] mr-auto mb-1">
                        <div className="bg-incoming w-fit mr-auto rounded-lg p-2">
                            <div className="text-white">Lorem, Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti neque nulla magni nesciunt eos ipsum eveniet tempora rem nam at. </div>
                            <div className="flex items-center justify-end gap-1">
                                <div className="text-xs text-slate-300">11:23 AM</div>
                                <BiCheckDouble className='text-check text-2xl' />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Messages