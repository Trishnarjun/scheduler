import React from "react";
import "./styles.scss";

export default function Appointment(props) {
  
  function refrac(props) {
    return (
      !props.time ? `No Appointments` : `Appointment at ${props.time}`
    )

  }
  
  return (
    <article className="appointment">{refrac(props)}</article>
  )
}