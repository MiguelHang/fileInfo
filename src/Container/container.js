import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import File from '../fileInfo/fileInfo'

class ContainerApp extends Component{
  
  render(){
      return (
      <Router>
        <div>
          <Route path={`/:id`} component={Child} />
        </div>
      </Router>
    );
  }
}

function Child({ match }) {
  console.log(match)
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" style={{padding: '25px'}}>
        <File id={match.params.id}></File>
      </Container>
    </React.Fragment>
  );
}

export default ContainerApp;
