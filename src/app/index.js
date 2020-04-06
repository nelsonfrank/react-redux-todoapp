import React from "react";
import Card from "./components/card";
import Header from "./header";

function App() {
  return (
    <div>
      <Header />
      <Card
        title={"Code todo-app"}
        date="Today"
        remainingTime="2 Days remain"
      />
    </div>
  );
}

export default App;
