import React, { Component } from 'react';
import Thread from './Thread';

class ThreadController extends React.Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return(
      <Thread />
    );
  }
}

export default ThreadController;