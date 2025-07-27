import {createContext} from "react";


 // eslint-disable-next-line react-refresh/only-export-components
 export const AppContext = createContext(null)

export const AppContextProvider=(props)=>{
    const value ={

    }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

