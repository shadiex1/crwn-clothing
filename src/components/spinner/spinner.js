import React from "react";
import {SpinnerContainer,SpinnerOverlay} from "./spinner.styles"

const Spinner = WrappedComponent =>({isLoading,...props})=>{
    
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer/>
        </SpinnerOverlay>
    ) : (
        <WrappedComponent {...props}/> 
    )
}



export default Spinner;