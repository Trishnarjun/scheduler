import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const dayLists = props.days.map((dayList) => {
    console.log(props.setDay)
    return (
      <DayListItem 
        key={dayList.id}
        name={dayList.name} 
        spots={dayList.spots} 
        selected={dayList.name === props.day}
        setDay={props.setDay}  
      />
    )
  })

  return (
    <ul>{dayLists}</ul>
  )
}