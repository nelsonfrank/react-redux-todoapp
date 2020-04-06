import React from "react";
import Card from "./components/card";

function App() {
  return (
    <div>
      <h2>Hello, World!</h2>
      <Card
        title={"Code todo-app"}
        date="Today"
        remainingTime="2 Days remain"
      />
    </div>
  );
}

export default App;
