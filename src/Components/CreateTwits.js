import React, { useState } from 'react'
import { FaCalendarCheck, FaRegImage, FaRegListAlt, FaRegSmile } from 'react-icons/fa';

const CreateTwits = () => {

    const [inputData , setInputData] = useState("");
    const [tweet , setTweet] = useState([]);

    const btnClick = () =>{
        if(!inputData){

        }else{
            setTweet([...tweet , inputData]);
            setInputData("");
        }
        console.log("added")
    }

    return (
        <>
            <div className="create">
                <div className="createfirst">
                    <div className="create_image">
                        <img src="./Images/pic-4.jpg" alt="profile image"  />
                    </div>
                    <div className="create_input">
                        <input type="text" placeholder="Whats Happening..." value={inputData} onChange={(e) =>setInputData(e.target.value)} />
                    </div>
                </div>

                {tweet.map((ele , index)=>{
                    return(
                        <>
                             <div key={index}>
                                 <p> {ele} </p>
                             </div>
                        </>
                    )
                })}
                
                <div className="create_second">
                    <div className="create_icons">
                       <FaRegImage className="ic" />
                       <FaRegListAlt className="ic" />
                       <FaRegSmile className="ic" />
                       <FaCalendarCheck className="ic" />
                    </div>
                    <div className="create_btn">
                        <a  onClick={btnClick}>Tweet</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateTwits;
