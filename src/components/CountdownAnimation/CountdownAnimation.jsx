import React, { useContext } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { SettingContext } from '../../context/SettingsContext/SettingsContext'

const CountdownAnimation = ({ keyValue, timer, animate, children }) => {
    
  const { stopTimer } = useContext(SettingContext)
  

  return (
    <CountdownCircleTimer
    key={keyValue}
    isPlaying={animate}
    duration={timer * 60}
    colors={['#637084']}
    colorsTime={[.33,.33,.33]}
    strokeWidth={6}
    size={320}
    trailColor='#343b46'
    onComplete={() => {
        stopTimer()
    }}
    
    >
        {children}
    </CountdownCircleTimer>
  )
}

export default CountdownAnimation