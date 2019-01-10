import React from 'react';
import Post from './Post';
import './Post.css'
const PostContainer= (props)=> {
    return(
    <div className="posts-container-wrapper">{props.data.map((d, i)=><Post key={i} data={d}/>)}

    </div>
    )

}

export default PostContainer;
