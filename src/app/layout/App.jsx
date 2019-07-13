import React, { Component, Fragment } from "react";
//import { Button } from "semantic-ui-react";
import EventDashboard from "../../Features/Event/EventDashboard/EventDashboard";
import NavBar from "../../Features/Nav/NavBar/NavBar";
import { Container } from "semantic-ui-react";
import { Route, Switch, withRouter } from "react-router-dom";
import HomePage from "../../Features/Home/HomePage";
import EventDetailedPage from "../../Features/Event/EventDetailed/EventDetailedPage";
import PeopleDashboard from "../../Features/User/PeopleDashboard/PeopleDashboard";
import SettingsDashboard from "../../Features/User/Settings/SettingsDashboard";
import UserDetailedPage from "../../Features/User/UserDetailed/UserDetailedPage";
import EventForm from "../../Features/Event/EventForm/EventForm";
import TestComponent from "../../Features/TestArea/TestComponent";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path='/' component={HomePage} />
        <Route
          path='/(.+)'
          render={() => (
            <Fragment>
              <NavBar />
              <Container className='main'>
                <Switch key={this.props.location.key}>
                  <Route exact path='/events' component={EventDashboard} />
                  <Route path='/events/:id' component={EventDetailedPage} />
                  <Route path='/people' component={PeopleDashboard} />
                  <Route path='/profile/:id' component={UserDetailedPage} />
                  <Route path='/settings' component={SettingsDashboard} />
                  <Route
                    path={["/createEvent", "/manage/:id"]}
                    component={EventForm}
                  />
                  <Route path='/test' component={TestComponent} />
                </Switch>
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default withRouter(App);
