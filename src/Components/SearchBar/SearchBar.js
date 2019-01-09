import React from "react";

import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const SearchBar= props=> {
  return (
    <Form>
      <FormGroup>
          <Input
            type="search"
            name="search"
            id="exampleSearch"
            placeholder="search"
          />
      </FormGroup>

    </Form>
    
  );
}

export default SearchBar;