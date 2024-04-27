import { createContext, useContext } from "react"; // Importing createContext and useContext hooks from React
import { useState } from "react"; // Importing useState hook from React

const dropContext = createContext(); // Creating a context named dropContext

function Dropvalue(){ // Defining a function named Dropvalue
    const value = useContext(dropContext); // Accessing the context values using useContext hook
    return value; // Returning the context values
}

function DropContext({ children }) { // Defining a function component named DropContext which accepts children as props
    const [drop, setDrop] = useState([]); // Initializing state variable drop with an empty array

    // Function to populate the dropdown with car options
    const hover = (e) => {
        setDrop(["Audi", "Benz", "BMW"]); // Setting drop state with car options when hovered
    };

    // Function to clear the dropdown
    const clearDropdown = () => {
        setDrop([]); // Clearing drop state
    };

    return (
        <>
            <dropContext.Provider value={{ drop, hover, clearDropdown }}> {/* Providing the context with drop state, hover function, and clearDropdown function */}
                {children} {/* Rendering the children components within the context provider */}
            </dropContext.Provider>
        </>
    );
}

export { Dropvalue, DropContext }; // Exporting Dropvalue and DropContext functions
