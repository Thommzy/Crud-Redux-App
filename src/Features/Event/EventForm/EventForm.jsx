import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan
} from "revalidate";
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";
import { createEvent, updateEvent } from "../eventActions";
import cuid from "cuid";
import TextInput from "../../../app/common/form/TextInput";
import TestArea from "../../../app/common/form/TestArea";
import SelectInput from "../../../app/common/form/SelectInput";
import DateInput from "../../../app/common/form/DateInput";

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {};

  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }
  return {
    initialValues: event
  };
};

const actions = {
  createEvent,
  updateEvent
};

//CombineValidators connect it staraight to the redux form
const validate = combineValidators({
  title: isRequired({
    message: "The Event Title is Required"
  }),
  category: isRequired({
    message: "Category is Required"
  }),
  description: composeValidators(
    isRequired({ message: "Please Enter a Description" }),
    hasLengthGreaterThan(4)({
      message: "Description need to be at Least Five Characters"
    })
  )(),
  city: isRequired("city"),
  venue: isRequired("venue"),
  date: isRequired("date")
});

const category = [
  { key: "drinks", text: "Drinks", value: "drinks" },
  { key: "culture", text: "Culture", value: "culture" },
  { key: "film", text: "Film", value: "film" },
  { key: "food", text: "Food", value: "food" },
  { key: "music", text: "Music", value: "music" },
  { key: "travel", text: "Travel", value: "travel" }
];
class EventForm extends Component {
  onFormSubmit = values => {
    if (this.props.initialValues.id) {
      this.props.updateEvent(values);
      this.props.history.push(`/events/${this.props.initialValues.id}`);
    } else {
      const newEvent = {
        ...values,
        id: cuid(),
        hostPhotoURL: "./assets/user.png",
        hostedBy: "Bob "
      };
      this.props.createEvent(newEvent);
      this.props.history.push(`/events/${newEvent.id}`);
    }
  };

  render() {
    const {
      history,
      initialValues,
      invalid,
      submitting,
      pristine
    } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header sub color='teal' content='Event Details' />
            <Form
              onSubmit={this.props.handleSubmit(this.onFormSubmit)}
              autoComplete='off'
            >
              <Field
                name='title'
                component={TextInput}
                placeholder='Give Your Event a Name'
              />
              <Field
                name='category'
                component={SelectInput}
                options={category}
                placeholder='What is Your Event About'
              />
              <Field
                name='description'
                component={TestArea}
                rows={3}
                placeholder='Tell us about your event'
              />
              <Header sub color='teal' content='Event Details' />
              <Field
                name='city'
                component={TextInput}
                placeholder='Event City'
              />
              <Field
                name='venue'
                component={TextInput}
                placeholder='Event Venue'
              />
              <Field
                name='date'
                component={DateInput}
                showTimeSelect
                timeFormat='HH:mm'
                dateFormat='dd LLL yyyy h:mm a'
                placeholder='Event Date'
              />
              <Button
                disabled={invalid || submitting || pristine}
                positive
                type='submit'
              >
                Submit
              </Button>
              <Button
                onClick={
                  initialValues.id
                    ? () => history.push(`/events/${initialValues.id}`)
                    : () => history.push("events")
                }
                type='button'
              >
                Cancel
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  mapState,
  actions
)(reduxForm({ form: "eventForm", validate })(EventForm));
