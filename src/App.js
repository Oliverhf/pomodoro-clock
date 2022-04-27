import { useContext, useEffect} from "react";
import Button from "./components/Button/Button";
import SetPomodoro from "./components/SetPomodoro/SetPomodoro";
import CountdownAnimation from "./components/CountdownAnimation/CountdownAnimation"
import { SettingContext } from "./context/SettingsContext/SettingsContext";

function App() {
  const { 
    pomodoro, 
    executing, 
    setCurrentTimer, 
    SettingBtn, 
    children,
    startAnimate,
    startTimer,
    pauseTimer,
    updateExecute, 
    btnMask
  } = useContext(SettingContext);

  useEffect(() => {
    updateExecute(executing)
  },[executing, startAnimate])



  return (
    <div className="container">
      <h1>Pomodoro</h1>
      <small>Be productive the right way.</small>
      {pomodoro === 0 ? (
        <SetPomodoro />
      ) : (
        <>
          <ul className="labels">
                <div className={btnMask}>
                </div>
            <li>
              <Button
                title="Work"
                activeClass={executing.active === "work" ? "active-label" : ''}
                _callback={() => setCurrentTimer("work")}
              />
            </li>
            <li>
              <Button
                title="Short Break"
                activeClass={executing.active === "short" ? "active-label" : ''}
                _callback={() => setCurrentTimer("short")}
              />
            </li>
            <li>
              <Button
                title="Long Break"
                activeClass={executing.active === "long" ? "active-label" : ''}
                _callback={() => setCurrentTimer("long")}
              />
            </li>
          </ul>
          <Button activeClass={'settings'} title="Settings" _callback={SettingBtn} />
          <div className="time-container">
            <div className="time-wrapper">
                <CountdownAnimation 
                keyValue={pomodoro}
                timer={pomodoro}
                animate={startAnimate}
                >
                    {children}
                </CountdownAnimation>

            </div>
          </div>
          <div className="button-wrapper">
            <Button title="Start" activeClass={!startAnimate ? 'active' : ''} _callback={startTimer} />
            <Button title="Pause" activeClass={startAnimate ? 'active' : ''} _callback={pauseTimer} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
