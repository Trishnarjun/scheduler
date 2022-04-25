import React from "react";
import "./styles.scss";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
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


export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function refrac(props) {
    return (
      !props.time ? `No Appointments` : `Appointment at ${props.time}`
    )
  }

  function save(name,interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    setTimeout(() => {
      props.bookInterview(props.id,interview)
      transition(SHOW)
    }, 700)
    transition(SAVING)
    
  }

  function clear() {
    setTimeout(() => {
      props.cancelInterview(props.id)
      transition(EMPTY)
    }, 700)
    transition(DELETE)
  }

  function edit() {

  }

  if (mode === EMPTY) {
    return (
      <article className="appointment">{props.time}<Empty onAdd={() => transition(CREATE)}/></article>
    )
  } else if(mode === SHOW) {
    return (
      <article className="appointment">{props.time}<Show student={props.interview.student} interviewer={props.interview.interviewer.name} onDelete={() => transition(CONFIRM)} onEdit={() => transition(EDIT)} /></article>
    )
  }
  if (mode === EDIT) {
    return (
      <article className="appointment">{props.time}
        <Form 
          student={props.interview.student}
          interviewer={props.interview.interviewer.id}
          interviewers={props.interviewers}
          onSave={save} 
          onCancel={() => back()}
        />
      </article>
    )
  }


  if (mode === CREATE) {
    return (
      <article className="appointment">{props.time}<Form interviewers={props.interviewers} onSave={save} onCancel={() => back()}/></article>
    )
  } 

  if(mode === SAVING) {
    return (
      <article className="appointment">{props.time}<Status message="Saving"/></article>
    )
  }
  if(mode === DELETE) {
    return (
      <article className="appointment">{props.time}<Status message="Deleting"/></article>
    )
  }

  if(mode === CONFIRM) {
    return (
      <article className="appointment">{props.time}<Confirm message="Are you sure you would like to delete?" onCancel={() => back()} onConfirm={clear}/></article>
    )
  }

  
  return (
    <article className="appointment">{refrac(props)}</article>
  )
}