import { useState, useEffect } from "react";
import axios from 'axios';

//hook file
export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });
  
  //getting data from the database 
  useEffect(() => {
    Promise.all([
      axios.get('api/days'),
      axios.get('api/appointments'),
      axios.get('api/interviewers')
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
    })
  }, [])

  const setDay = day => setState({...state, day})
  //function for updating spots without reloading when appointments are edited, made, or deleted 
  function updateSpots(requestType, edit) {
    const days = state.days.map((day) => {
      if (day.name === state.day) {
        if (requestType === "bookAppointment" && edit === false) {
          return { ...day, spots: day.spots - 1 }
        } else if (!requestType) {
          return { ...day, spots: day.spots + 1 }
        }
      }
      return { ...day }
    })
    return days;
  }

  //function for when an appointment is booked; adding it to the state and updating backend
  function bookInterview(id, interview, edit = false) {
    console.log(id, interview, edit);
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.put(`/api/appointments/${id}`, {interview}).then(res =>{

      const days = updateSpots("bookAppointment", edit)

      setState({
        ...state,
        appointments, 
        days
      });
    })
  }
  //function for when an appointment is canceled; adding it to the state and updating backend
  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios.delete(`/api/appointments/${id}`).then(res =>{

      const days = updateSpots()

      setState({
        ...state,
        appointments,
        days
      });


    })
  } 

  return {state, setDay, bookInterview, cancelInterview}

} 





