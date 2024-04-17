import styles from "./css/Dropdown.module.css"
import { Dropvalue } from "./dropcontext"

function Dropdown(){
    const {hover}= Dropvalue()
    return(
        <>
            <button onMouseOver={(e)=>hover(e)} className={styles.button}>Select</button>
        </> 
        
    )
}

export default Dropdown;