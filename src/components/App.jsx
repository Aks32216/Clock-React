import React from "react";

function App() {
  const [currTime, setTime] = React.useState(new Date().toLocaleTimeString());

  setInterval(getTime, 1000);

  function getTime() {
    setTime(new Date().toLocaleTimeString());
  }

  return (
    <div className="container">
      <h1>{currTime}</h1>
      {getTime}
    </div>
  );
}

export default App;
