import Dropdown from "./Dropdown"; // Importing the Dropdown component from Dropdown.js
import { DropContext } from "./dropcontext"; // Importing the DropContext component from dropcontext.js
import Dropdisplay from "./Dropdisplay"; // Importing the Dropdisplay component from Dropdisplay.js

function App() { // Defining a functional component named App
  return (
    <DropContext> {/* Providing the DropContext component */}
      <Dropdown /> {/* Rendering the Dropdown component */}
      <Dropdisplay /> {/* Rendering the Dropdisplay component */}
    </DropContext>
  );
}

export default App; // Exporting the App component as default
