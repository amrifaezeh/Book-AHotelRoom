import React, { useReducer, useCallback } from "react";

const ToggleButton = ({ children, className, toggleClassName = "btn-warning", onClick }) => {
    const f= ()=>{};
    onClick= onClick || f;
    const defaultButtonClass = "btn-primary";
    const defaultState = { toggle: false, buttonClass: defaultButtonClass, text: children };
    const reducerFunction=useCallback((preState, dispatchData) => { 
        console.log('log');
               
        if (!preState.toggle) {

            const newState = {
                toggle: true,
                buttonClass: toggleClassName,
                text: (<span> {preState.text} <i className="fas fa-times-circle"></i></span>)
            }            
            onClick(newState.toggle);
            return newState;

        } else {
            
            onClick(defaultState.toggle);
            return defaultState;
        }
    },[]);
    const [button, dispatchButton] = useReducer(reducerFunction,defaultState);

    const handleClick=() =>{
        
        dispatchButton({ data: "hi" })
        
    };
    return (
        <button className={`btn ${button.buttonClass} ${className}`}
            onClick={handleClick}
        >{button.text}</button>
    )
}

export default ToggleButton;