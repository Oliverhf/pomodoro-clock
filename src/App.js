import { CountdownCircleTimer } from "react-countdown-circle-timer";
import SetPomodoro from "./components/SetPomodoro/SetPomodoro";

function App() {
  return (
    <div className="container">
      <h1>Pomodoro</h1>
      <small>be productive the right way.</small>
      <SetPomodoro />
      {/* <CountdownCircleTimer /> */}
    </div>
  );
}

export default App;
