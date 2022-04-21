export default function getAppointmentsForDay(state, day) {
  const mapped = state.days.map((obj) => {
    if (obj.name === day){
      return obj.appointments
    }})
  const daysAppointsmapped = mapped.filter(x => Array.isArray(x))
  if (daysAppointsmapped[0] === undefined) {
    return []
  }
  const daysAppointsAllmapped =  daysAppointsmapped[0].map(x => state.appointments[x])
  return daysAppointsAllmapped
}