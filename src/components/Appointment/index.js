import React from "react";
import "./styles.scss";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Error from "./Error"
import useVisualMode from "hooks/useVisualMode.js"
import Status from "./Status";
import Confirm from "./Confirm";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const CONFIRM = "CONFIRM";
const DELETE = 'DELETE';
const EDIT = 'EDIT';
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

//appointment component
export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  //saving an appointment function with editing logic 
  function save(name,interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    if (mode === EDIT) {
      props
        .bookInterview(props.id,interview, true)
        .then(() => transition(SHOW))
        .catch(error => transition(ERROR_SAVE, true));
    } else {
      props
        .bookInterview(props.id,interview, false)
        .then(() => transition(SHOW))
        .catch(error => transition(ERROR_SAVE, true));
    }
  }

  //deleting an appointment function
  function clear() {
    transition(DELETE, true)
    props
      .cancelInterview(props.id)
      .then(() => transition(EMPTY))
      .catch(error => transition(ERROR_DELETE, true));
  }

  //conditional logic for displaying UI
  if (mode === EMPTY) {
    return (
      <article className="appointment">{props.time}<Empty onAdd={() => transition(CREATE)}/></article>
    )
  } else if(mode === SHOW) {
    return (
      <article className="appointment">{props.time}<Show student={props.interview.student} interviewer={props.interview.interviewer.name} onDelete={() => transition(CONFIRM)} onEdit={() => transition(EDIT)} /></article>
    )
  }

  switch (mode) {
    case CREATE:
      return (
        <article className="appointment">{props.time}<Form interviewers={props.interviewers} onSave={save} onCancel={() => back()}/></article>
      )
    case SAVING:
      return (
        <article className="appointment">{props.time}<Status message="Saving"/></article>
      )
    case CONFIRM:
      return (
        <article className="appointment">{props.time}<Confirm message="Are you sure you would like to delete?" onCancel={() => back()} onConfirm={clear}/></article>
      )
    case DELETE: 
      return (
        <article className="appointment">{props.time}<Status message="Deleting"/></article>
      )
    case EDIT:
      return (
        <article className="appointment">{props.time}
          <Form 
            student={props.interview.student}
            interviewer={props.interview.interviewer.id}
            interviewers={props.interviewers}
            onSave={save} 
            onCancel={() => back()}
            message="edit"
          />
        </article>
      )
    case ERROR_SAVE:
      return (
        <article className="appointment">{props.time}<Error onClose={() => back()} message="Saving error, could not save"/></article>
      )
    case ERROR_DELETE:
      return (
        <article className="appointment">{props.time}<Error onClose={() => back()} message="Deleting Error, could not delete"/></article>
      )
    default:
  }
}