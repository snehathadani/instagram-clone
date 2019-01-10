import React from 'react';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class CommentInput extends React.Component {
    constructor(){
        super();

        this.state=({
            comment: ""
        })
    }
    render(){
    return(
        <Form onSubmit={(e) => {e.preventDefault(); this.props.onAddComment(this.state.comment)}} >
      <FormGroup>
          <Input
            type="input"
            name="comment"
            placeholder="Add a Comment"
            onChange = {(e) => this.setState({comment: e.target.value})}
          />
      </FormGroup>

    </Form>
    
    );
    }
};

export default CommentInput;