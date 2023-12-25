import React from 'react'
import Layout from './Layout'
import Messages from '../components/Messages'

const Home = () => {
  return (
    <Layout>
        <div className="bgimg">
          <Messages />
        </div>
    </Layout>
  )
}

export default Home