import React from "react";


  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 
const Like= (props)=> {
    return(
        <div style={{textAlign: 'left'}}>        
            <FontAwesomeIcon icon={['fas', 'heart']}/>
            <FontAwesomeIcon icon={['fas', 'comment']}/>
        </div>

    )
}
export default Like;