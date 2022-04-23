import React from "react";
import "./styles.scss";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import useVisualMode from "hooks/useVisualMode.js"

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";


export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  
  function refrac(props) {
    return (
      !props.time ? `No Appointments` : `Appointment at ${props.time}`
    )
  }

  if (mode === EMPTY) {
    return (
      <article className="appointment">{props.time}<Empty onAdd={() => transition(CREATE)}/></article>
    )
  } else if(mode === SHOW) {
    console.log(props)
    return (
      <article className="appointment">{props.time}<Show student={props.interview.student} interviewer={props.interview.interviewer.name} /></article>
    )
  }
  if (mode === CREATE) {
    return (
      <article className="appointment">{props.time}<Form interviewers={[]} onCancel={() => back()}/></article>
    )
  } 

  
  return (
    <article className="appointment">{refrac(props)}</article>
  )
}