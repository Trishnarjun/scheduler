import React, { useState } from 'react';
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form(props) {
  const [student, setStudent] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");
  function reset() {
    setStudent("");
    setInterviewer(null);
  }
  function cancel() {
    props.onCancel()
    reset()
  }
  // function validate() {
  //   if (student === "") {
  //     setError("student name cannot be blank");
  //     return;
  //   }
  //   if (interviewer === null) {
  //     setError("please select an interviewer");
  //     return;
  //   }
  //   console.log("is it working")
  //   props.onSave(student, interviewer);
  // }
  function validate() {
    if (student === "") {
      console.log("Inside here now");
      setError("student name cannot be blank");
      return;
    }
    if (interviewer === null) {
      setError("please select an interviewer");
      return;
    }

    setError("");
    props.onSave(student, interviewer);
    
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
            onChange={event => setStudent(event.target.value)}
            data-testid="student-name-input"
          />
          <section className="appointment__validation">{error}</section>
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
          <Button onClick={validate} confirm >Save</Button>
        </section>
      </section>
    </main>
  )
}