import React , {useState} from 'react'
import { FaComment, FaHeart, FaLeaf, FaRegChartBar, FaRegCheckCircle } from 'react-icons/fa';
import postapi from '../API/Postsapi';
// import CreateTwits from './CreateTwits';

const Posts = () => {

    const [data , setData] = useState(postapi);
    
    
    return (
        <>{data.map((currVal , index)=>{

            const{ image , name , userid , minute , info , icon1 , icon2 , icon3 , icon4 , comments1 , comments2 , comments3 , comments4 } = currVal ;
           
            return(
                <>
                    <div className="posts"  key={index}>
                         <div className="posts_first">
                            <div className="posts_first_img">
                                <img src={image} alt="profile image"/>
                            </div>
                            <div className="posts_first_name"><strong>{name}</strong> <FaRegCheckCircle className="verify"/></div>
                            <div className="posts_first_userid"> {userid} <span> {minute} </span></div>
                        </div>

                <div className="posts_details">
                    
                        <div className="posts_details_msg">
                           <p>{info}</p>
                        </div>

                        <div className="posts_details_img">
                           <img src={image} alt="details image" />
                        </div>
                        
                    <div className="posts_reactions">
                        <span><FaComment className="re"/>{comments1}</span>
                        <span><FaRegChartBar className="re"/> {comments2} </span>
                        <span><FaHeart className="re"/> {comments3} </span>
                        <span><FaLeaf className="re"/> {comments4} </span>
                    </div>
                </div>
            </div>
                </>
            )
        })}
            
        </>
    )
}

export default Posts ;

