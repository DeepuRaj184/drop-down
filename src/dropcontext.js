import {createContext,useContext } from "react";
import { useState } from "react";
const dropContext = createContext();

function Dropvalue(){
    const value = useContext(dropContext)
    return value
}

function DropContext({children}){
    const [drop,setDrop]=useState([]);

    const hover = (e)=>{
        setDrop(["Audi","Benz","BMW"])
    }
    const clearDropdown =()=>{
        setDrop([])
    }

    return(
        <>
            <dropContext.Provider value={{drop,hover,clearDropdown}} >
                {children}
            </dropContext.Provider>
        </>
        
    )
}

export {Dropvalue,DropContext}