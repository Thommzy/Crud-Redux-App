import React, { Component, Fragment } from "react";
//import { Button } from "semantic-ui-react";
import EventDashboard from "../../Features/Event/EventDashboard/EventDashboard";
import NavBar from "../../Features/Nav/NavBar/NavBar";
import { Container } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Container className='main'>
          <EventDashboard />
        </Container>
      </Fragment>
    );
  }
}

export default App;
