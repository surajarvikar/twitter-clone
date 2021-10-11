import React, { useState } from 'react';
import trendapi from '../API/Trendapi';

const TrendsKeyword = () => {

    const [state , setState] = useState(trendapi);

    return (
        <>
            <div className="keywords">
              <div className="key">
                <div className="keywords_heading">
                    <h4>Trends For You </h4>
                </div>
                
                 {state.map((currEle , index)=>{
                    const {id , country , keyword , totalkeywords } = currEle ;

                    return(
                        <>
                        <div className="scroll-bar">
                            <div className="country" key={index}>{country}</div>
                            <div className="keyword_name"><strong>{keyword}</strong></div>
                            <div className="keyword_tweets">{totalkeywords}</div>
                        </div>
                        </>
                    )
                 })}
                
              </div>
            </div>
        </>
    )
}

export default TrendsKeyword ;
