import { Dropvalue } from "./dropcontext"
import styles from "./css/Dropdisplay.module.css"

function Dropdisplay(){
    const {drop,clearDropdown}=Dropvalue()
    return(
        <>
            <ul>
                {drop.map((car,i)=>(
                    <li onClick={clearDropdown}  className={styles.cars} key={i}><a>{car}</a></li>
                ))}
            </ul>
        </>
        
    )
}

export default Dropdisplay