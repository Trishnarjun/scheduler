import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss"


export default function InterviewerList(props) {
  const interviewerLists = props.interviewers.map((interviewer) => {
    // console.log("1",props)
    // console.log("2",props.interviewer)
    // console.log("3",interviewer.id)
    // let inrt = interviewer.id
    return (
      <InterviewerListItem 
        key={interviewer.id}
        name={interviewer.name} 
        avatar={interviewer.avatar} 
        selected={interviewer.id === props.interviewer}
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