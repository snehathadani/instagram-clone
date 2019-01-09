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
    render(){
        return(
            <div>
                <ListGroup>
                    
                {this.state.comments.map((c,i)=> 
                    <ListGroupItem key={i}> {c.username}-{c.text} </ListGroupItem>
                    )}
                    
                    </ListGroup>
                    <CommentInput/>
            </div>
        );
    }
}

export default CommentSection;