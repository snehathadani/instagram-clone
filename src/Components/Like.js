import React from "react";


  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 
const Like= (props)=> {
    return(
        <div style={{textAlign: 'left'}}>        
            <FontAwesomeIcon icon={['fas', 'heart']}
             onClick={props.onAddLike}/>
            <FontAwesomeIcon icon={['fas', 'comment']}/>
            {props.likes} likes
        </div>

    )
}
export default Like;