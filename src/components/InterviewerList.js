import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss"


export default function InterviewerList(props) {
  console.log("props",props)
  const interviewerLists = props.interviewers.map((interviewer) => {
    return (
      <InterviewerListItem 
        key={interviewer.id}
        name={interviewer.name} 
        avatar={interviewer.avatar} 
        selected={interviewer.id === props.value}
        setInterviewer={() => props.setInterviewer(interviewer.id)}   
      />
    )
  })
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">interviewer</h4>
      <ul className="interviewers__list">{interviewerLists}</ul>
    </section>
  )
}