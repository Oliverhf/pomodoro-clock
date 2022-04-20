import React, { useContext } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { SettingContext } from '../../context/SettingsContext/SettingsContext'

const CountdownAnimation = ({ key = 1, timer = 20, animate = true, children }) => {
    
  const { stopTimer } = useContext(SettingContext)
  

  return (
    <CountdownCircleTimer
    key={key}
    isPlaying={animate}
    duration={timer * 60}
    colors={['#fef6b', 0.33]}
    strokeWidth={6}
    trailColor='#1511932'
    onComplete={() => {
        stopTimer()
    }}
    
    >
        {children}
    </CountdownCircleTimer>
  )
}

export default CountdownAnimation