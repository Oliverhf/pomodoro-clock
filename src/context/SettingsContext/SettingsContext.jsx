import React, { createContext, useState } from 'react'

export const SettingContext = createContext()

const SettingsContextProvider = (props) => {
    

 const [pomodoro, setPomodoro] = useState(0)
 const [executing, setExecuting] = useState({})
 const [startAnimate, setStartAnimate] = useState(false)

 const [btnMask, setBtnMask] = useState('btn-mask')

 function startTimer() {
     setStartAnimate(true)
 }

 function pauseTimer() {
     setStartAnimate(false)
 }

 function stopTimer() {
     setStartAnimate(false)
 }

 const SettingBtn = () => {
     setExecuting({})
     setPomodoro(0)
     pauseTimer()
 }

 function setCurrentTimer(active_state) {
    updateExecute({
        ...executing,
        active: active_state
    })

    setTimerTime(executing)
}

 const updateExecute = updatedSettings => {
     setExecuting(updatedSettings)
     setTimerTime(updatedSettings)
 }

 const setTimerTime = evaluate => {
     switch(evaluate.active) {
        case 'work':
            setPomodoro(evaluate.work)
            setBtnMask('btn-mask --work')
            break;

        case 'short':
            setPomodoro(evaluate.short)
            setBtnMask('btn-mask --short')
            break;

        case 'long':
            setPomodoro(evaluate.long)
            setBtnMask('btn-mask --long')
            break;

        default:
            setPomodoro(0)
            break;
            
     }
 }

 const children = ({remainingTime}) => {
     const minutes = Math.floor(remainingTime / 60)
     const seconds = remainingTime % 60

     return `${minutes}:${seconds}`
 }

  return (
    <SettingContext.Provider 
    value={{
        stopTimer,
        updateExecute,
        pomodoro,
        executing,
        startAnimate,
        startTimer,
        pauseTimer,
        setCurrentTimer,
        updateExecute,
        SettingBtn,
        children,
        btnMask
    }}>
        {props.children}
    </SettingContext.Provider>
  )
}

export default SettingsContextProvider