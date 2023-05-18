import React, { useState } from "react";
import DisplayIdeas from "./DisplayIdeas";
import IdeasForm from "./IdeasForms";

function App() {
  const [ideas, setIdeas] = useState([
    "Movie about a guy who gets bit by a radioactive mole rat",
    "Romcom about two developers over Zoom",
    "Horror film where AWS goes down for 24 hours"
  ]);

  const onAddIdea = newIdea => {
    setIdeas([...ideas, newIdea]);
  }
  
  return (
    <main>
        <h1>Welcome, Super Awesome Movie Monster Think Tank!</h1>
        
        <br />

        <DisplayIdeas ideas={ideas} />
        <h1>Submit your ideas down below</h1>
        <IdeasForm onAddIdea={onAddIdea} />
    </main>
  );
}

export default App;

