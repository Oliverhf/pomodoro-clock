import { useContext } from "react";
import Button from "./components/Button/Button";
import SetPomodoro from "./components/SetPomodoro/SetPomodoro";
import CountdownAnimation from "./components/CountdownAnimation/CountdownAnimation"
import { SettingContext } from "./context/SettingsContext/SettingsContext";

function App() {
  const { 
    pomodoro, 
    executing, 
    setCurrentTimer, 
    SettingsBtn, 
    children,
    startAnimate,
    startTimer,
    pauseTimer
  } = useContext(SettingContext);

  return (
    <div className="container">
      <h1>Pomodoro</h1>
      <small>be productive the right way.</small>
      {pomodoro === 0 ? (
        <SetPomodoro />
      ) : (
        <>
          <ul className="labels">
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
          <Button title="Settings" _callback={SettingsBtn} />
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
            <Button title="Start" className={!startAnimate ? 'active' : ''} _callback={startTimer} />
            <Button title="Pause" className={startAnimate ? 'active' : ''} _callback={pauseTimer} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
