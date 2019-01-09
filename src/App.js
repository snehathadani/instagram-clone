import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './Components/PostContainer/PostContainer';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHeart,
  faComment,
} from '@fortawesome/free-solid-svg-icons';

import {
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import AppHeader from './Components/AppHeader';

library.add(faHeart, faComment, faInstagram)


class App extends Component {
  constructor(){
    super();
    this.state={
      data:[]
    }
  }
  componentDidMount(){
    this.setState({data:dummyData});
  }
  render() {
    
    return (

      <div className= "App">
        <AppHeader/>
        <div className="Post">
        <PostContainer data={this.state.data}/>
        </div>
      </div>
    );
  }
}

export default App;
