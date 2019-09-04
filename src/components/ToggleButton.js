import React, { useState, useReducer } from "react";

const ToggleButton = ({ children, className, onToggle, toggleClassName = "btn-warning" }) => {
    const f= ()=>{};
    onToggle= onToggle || f;
    const defaultButtonClass = "btn-primary";
    const defaultState = { toggle: false, buttonClass: defaultButtonClass, text: children };
    const [button, dispatchButton] = useReducer((preState, dispatchData) => {

        if (!preState.toggle) {

            const newState = {
                toggle: true,
                buttonClass: toggleClassName,
                text: (<span> {preState.text} <i class="fas fa-times-circle"></i></span>)
            }
            onToggle(newState.toggle);
            return newState;

        } else {
            onToggle(defaultState.toggle);
            return defaultState;
        }
    }, defaultState);

    return (
        <button class={`btn ${button.buttonClass} ${className}`}
            onClick={() => dispatchButton({ data: "hi" })}
        >{button.text}</button>
    )
}

export default ToggleButton;