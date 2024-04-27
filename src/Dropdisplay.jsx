import { Dropvalue } from "./dropcontext" // Importing the custom hook Dropvalue from the dropcontext file
import styles from "./css/Dropdisplay.module.css" // Importing CSS module styles from Dropdisplay.module.css

function Dropdisplay(){ // Defining a functional component named Dropdisplay
    const {drop,clearDropdown}=Dropvalue() // Destructuring values from the Dropvalue hook

    return(
        <>
            <ul> {/* Rendering an unordered list */}
                {drop.map((car,i)=>( // Mapping over the 'drop' array to render list items for each car
                    <li onClick={clearDropdown}  className={styles.cars} key={i}><a>{car}</a></li> // List item with a click event listener to clear the dropdown and applying CSS class 'cars'
                ))}
            </ul>
        </>
    )
}

export default Dropdisplay; // Exporting the Dropdisplay component as default
