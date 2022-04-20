import React, { useState } from 'react';
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  function reset() {
    setStudent("");
    setInterviewer(null);
  }
  function cancel() {
    props.onCancel()
    reset()
  }
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form onSubmit={event => event.preventDefault()} autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={(event) => setStudent(event.target.value)}
          />
        </form>
        <InterviewerList 
          /* your code goes here */
          interviewers={props.interviewers}
          value={interviewer}
          setInterviewer={setInterviewer}
        />
      </section>
      <section  className="appointment__card-right">
        <section className="appointment__actions">
          <Button onClick={cancel} danger >Cancel</Button>
          <Button onClick={props.onSave} confirm >Save</Button>
        </section>
      </section>
    </main>
  )
}