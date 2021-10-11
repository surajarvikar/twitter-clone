import React from 'react'
import CreateTwits from './CreateTwits'
import Posts from './Posts'

const Twitts = () => {
    return (
        <>
            <div className="twitts">
               <div className="home">Home</div>
               <CreateTwits />
               < Posts />
               
               
            </div>
        </>
    )
}

export default Twitts
