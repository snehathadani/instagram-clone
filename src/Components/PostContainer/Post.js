import React from 'react';
import PostHeader from './PostHeader';
import Like from '../Like'
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import CommentSection from '../CommentSection/CommentSection';
import './Post.css';

 class Post extends React.Component{
     constructor(props){
         super(props);
         this.state={
             likes:props.data.likes
         }

     }
     render(){
    return(
        <Card>
            <CardTitle className="post-border">
                <PostHeader thumbnailUrl={this.props.data.thumbnailUrl}
                 username={this.props.data.username}/>
            </CardTitle>
            <CardBody className="post-image-wrapper">
                <CardImg className="post-image" src={this.props.data.imageUrl} alt="" top />
            </CardBody>
            <Like likes={this.state.likes} onAddLike={() => this.setState({likes: this.state.likes + 1})}/>
            <CommentSection comments= {this.props.data.comments}/>
        </Card>
    );
}
 }


export default Post;