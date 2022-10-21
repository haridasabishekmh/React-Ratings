import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './StarRating.css'

  const StarRating=()=>{

    const [rating, setrating] = useState(null)

      return (
        <>
        <div className='StarRating'>
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
                    <FaStar id='fastar'
                    size={15}
                    color={ratingValue<= (rating)? 'yellow' : 'grey'} 
                    />
                </label>
              )
            })}
            {rating===5 && 
                <>
                <p id='comment5'>Excellent</p> 
                <p>Your rating is <b>{rating}</b></p>
                <button id="removeStar" onClick={()=>{setrating(null)}}>Remove rating</button>
                </>
            }
            {rating===4 && 
                <>
                <p id='comment4'>Very Good</p>
                <p>Your rating is <b>{rating}</b></p>
                <button id="removeStar" onClick={()=>{setrating(null)}}>Remove rating</button>
                </>
            }
            {rating===3 && 
                <>
                <p id='comment3'>Good</p>
                <p>Your rating is <b>{rating}</b></p>
                <button id="removeStar" onClick={()=>{setrating(null)}}>Remove rating</button>
                </>
            }
            {rating===2 && 
                <>
                <p id='comment2'>Bad</p>
                <p>Your rating is <b>{rating}</b></p>
                <button id="removeStar" onClick={()=>{setrating(null)}}>Remove rating</button>
                </>
            }
            {rating===1 &&
                <> 
                <p id='comment1'>Poor</p>
                <p>Your rating is <b>{rating}</b></p>
                <button id="removeStar" onClick={()=>{setrating(null)}}>Remove rating</button>
                </>
            }    
        </div>
        </>
      );
  };
export default StarRating
