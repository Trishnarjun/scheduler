import { useState } from "react";

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);
  function transition(mode, replace = false) { 
    if(replace === false) {setHistory(prev => [ ...prev, mode])}
    setHistory(prev => [ ...prev.slice(0,-1), mode])
  }
  function back(mode) { 
    setHistory(prev => {
      if (prev.length !== 1) {
        return prev.slice(0,-1)
      }
      return prev
    })
  }

  return { mode: history[history.length - 1], transition, back};
}
