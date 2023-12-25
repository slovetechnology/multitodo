import React from 'react'
import Navbar from '../components/Navbar'
import ChatForm from '../components/ChatForm'
import SideNav from '../components/SideNav'
import { useAtom } from 'jotai'
import { MEDIASCREEN, MOBILECONTACT, SCREEN } from '../components/store'
import ContactInfo from './ContactInfo'

const Layout = ({ children }) => {
    const [screen, setScreen] = useAtom(SCREEN)
    const [screen2, setScreen2] = useAtom(MEDIASCREEN)
    const [screen3, setScreen3] = useAtom(MOBILECONTACT)
    return (
        <>
            {/* mobile contact info */}
            {screen3 && <div className="fixed top-0 left-0 w-full bg-dark h-screen z-10 border-slate-500">
                <ContactInfo />
            </div>}
            <div className="bg-sub">
                <div className="grid grid-cols-1 lg:grid-cols-7">
                    <div className={`lg:col-span-2 bg-side h-screen ${screen2 ? 'hidden' : ''} border-r border-slate-500`}>
                        <SideNav />
                    </div>
                    <div className={`${!screen ? 'lg:col-span-5' : 'lg:col-span-3'} h-screen ${screen2 ? '' : 'hidden'} lg:block bg-bgmain`}>
                        <div className=""> <Navbar /> </div>
                        <div className="h-[90vh] pb-10 overflow-y-auto bg-sub/90">
                            {children}
                        </div>
                        <div className="fixed lg:relative bottom-0 left-0 w-full"> <ChatForm /> </div>
                    </div>
                    <div className="hidden lg:block lg:col-span-2 bg-dark h-screen border-l border-slate-500">
                        <ContactInfo />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout