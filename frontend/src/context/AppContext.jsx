import { createContext } from "react";
import {doctors} from "../../src/assets/assets/assets_frontend/assets.js"
export const AppContext = createContext()
function AppContextProvider(props){
    const currencySymbol = '₹'
    const value={
        doctors,currencySymbol
    }
    return(
        <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
    )




}
export default AppContextProvider