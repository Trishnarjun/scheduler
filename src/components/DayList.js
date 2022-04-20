import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const dayList = props.days.map((dayInList) => {
    //console.log(props.setDay)
    return (
      <DayListItem 
        key={dayInList.id}
        name={dayInList.name} 
        spots={dayInList.spots} 
        selected={dayInList.name === props.value}
        setDay={props.onChange}  
      />
    )
  })

  return (
    <ul>{dayList}</ul>
  )
}