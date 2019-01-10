import React from "react";

import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state={
      searchInput: '',
    }

    
  }

  render(){
    console.log(this.props)
  return (
    <Form onSubmit={(e)=>{e.preventDefault(); this.props.onSearch(this.state.searchInput)}}>
      <FormGroup>
          <Input
            type="search"
            name="search"
            id="exampleSearch"
            placeholder="search"
            onChange={(event)=>{this.setState({searchInput:event.target.value})}}
          />
      </FormGroup>

    </Form>
    
  );
};
}
export default SearchBar;