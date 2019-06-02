import React, { useState, useEffect } from 'react'
import RecordTimerContent from './RecordTimerContent'

const RecordTimer = () => {
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  },[])

  const adjustTime = () => {
    if(seconds === 60){
      setSeconds(0)
      setMinutes(minutes => minutes + 1)
    }
    
  }
  
  adjustTime()
  return(
    <RecordTimerContent>
      {minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}
    </RecordTimerContent>
  )
}

export default RecordTimer