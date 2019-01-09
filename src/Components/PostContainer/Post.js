import React from 'react';
import PostHeader from './PostHeader';
import Like from '../Like'
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import CommentSection from '../CommentSection/CommentSection';
import './Post.css';

const Post= (props)=>{
    return(
        <Card>
            <CardTitle className="post-border">
                <PostHeader thumbnailUrl={props.data.thumbnailUrl}
                 username={props.data.username}/>
            </CardTitle>
            <CardBody class="post-image-wrapper">
                <CardImg className="post-image" src={props.data.imageUrl} alt="" top />
            </CardBody>
            <Like/>
            <CommentSection comments= {props.data.comments}/>
        </Card>
    )
}


export default Post;