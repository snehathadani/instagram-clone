import React from 'react';
import PropTypes from 'prop-types';
import{ListGroup, ListGroupItem} from 'reactstrap';
import CommentInput from './CommentInput';



class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state={
            comments:props.comments
        };
    }
        handleAddComment= (comment) => {
            const newComment = {username: "sneha", text: comment} 
            const newComments = [...this.state.comments, newComment]
            this.setState({comments: newComments})
        }

    render(){
        return(
            <div>
                <ListGroup>
                    
                {this.state.comments.map((c,i)=> 
                    <ListGroupItem key={i}> {c.username}-{c.text} </ListGroupItem>
                    )}
                    
                    </ListGroup>
                    <CommentInput onAddComment={this.handleAddComment}/>
            </div>
        );
    }
}

export default CommentSection;