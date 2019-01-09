import React from 'react';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const CommentInput = props=> {
    return(
        <Form>
      <FormGroup>
          <Input
            type="input"
            name="comment"
            placeholder="Add a Comment"
          />
      </FormGroup>

    </Form>
    
    );
};

export default CommentInput;