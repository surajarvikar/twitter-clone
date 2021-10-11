import React from 'react'
import { FaSistrix } from 'react-icons/fa'
import TrendsKeyword from './TrendsKeyword'

const Trends = () => {
    return (
        <>
            <div className="trends">
                <div className="trends_searchbar">
                    <input type="text" className="search_twitter" placeholder="Search Twitter..." />
                    <div className="search_icon">
                        <FaSistrix className="search" />
                    </div>
                </div>
                < TrendsKeyword />
            </div>
        </>
    )
}

export default Trends
