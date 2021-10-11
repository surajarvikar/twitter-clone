import React from 'react'
import Sidebar from './Components/Sidebar';
import Trends from './Components/Trends';
import Twitts from './Components/Twitts';

const App = () => {
  return (
    <>
        <div className="twitter">
            <Sidebar />
            <Twitts />
            <Trends />
        </div>
    </>
  )
}

export default App ;

