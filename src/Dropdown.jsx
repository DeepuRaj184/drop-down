import styles from "./css/Dropdown.module.css" // Importing CSS module styles from Dropdown.module.css
import { Dropvalue } from "./dropcontext" // Importing the Dropvalue function from the dropcontext file

function Dropdown(){ // Defining a functional component named Dropdown
    const {hover}= Dropvalue() // Destructuring the hover function from the Dropvalue hook

    return(
        <>
            <button onMouseOver={(e)=>hover(e)} className={styles.button}>Select</button> {/* Rendering a button with onMouseOver event listener, triggering the hover function */}
        </>
    )
}

export default Dropdown; // Exporting the Dropdown component as default
