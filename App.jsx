import React, { useState } from "react";
import Navbar from "./Components/navBar";
import Intro from "./Components/Intro";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
       <Navbar/>
       <Intro/>
    </div>
  );
}

export default App;
