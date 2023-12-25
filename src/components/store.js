import { atom } from "jotai";


export const SCREEN = atom(false)
export const MEDIASCREEN = atom(false)
export const MOBILECONTACT = atom(false)
export const ROUTES = atom({
    allChats: 'all-chats',
    allGroups: 'all-groups',
    allFeeds: 'all-feeds',
    singleFeeds: 'single-feeds'
})

export const PAGES = atom({
    contact: 'contact',
    profile: 'profile',
})

export const ACTIVEROUTE = atom(ROUTES.allChats)