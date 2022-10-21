import { useState } from 'react';
import { FaStar } from 'react-icons/fa';


  const StarRating=()=>{

    const [rating, setrating] = useState(null)
    
      return (
        <>
        <div className='app'>
            {[0,0,0,0,0].map((star,index)=>{
              var ratingValue=index+1
              return(
                <label>
                <input 
                  className='radio'
                  type={'radio'} 
                  value={ratingValue}
                  onClick={()=>{setrating(ratingValue)}}
                />
                <FaStar 
                  size={30}
                  color={ratingValue<= (rating)? 'yellow' : 'grey'} 
                />
                </label>
              )
            })}
            {rating===5 && <p id='comment5'>Excellent</p>}
            {rating===4 && <p id='comment4'>Very Good</p>}
            {rating===3 && <p id='comment3'>Good</p>}
            {rating===2 && <p id='comment2'>Bad</p>}
            {rating===1 && <p id='comment1'>Poor</p>}
            <p>Your rating is {rating}</p>
        </div>
        </>
      );
  };
export default StarRating
