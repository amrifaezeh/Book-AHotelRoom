import React, { useReducer, useCallback, useRef } from "react";

const ToggleButton = React.memo(({ children, className, toggleClassName = "btn-warning", onClick }) => {
    const f = () => { };
    onclick = onclick || f;
    onClick = useCallback(onClick, []);
    const defaultButtonClass = "btn-primary";
    const defaultState = useRef({ toggle: false, buttonClass: defaultButtonClass, text: children });
    const reducerFunction = useCallback((preState, dispatchData) => {

        if (!preState.toggle) {

            const newState = {
                toggle: true,
                buttonClass: "btn-warning",
                text: (<span> {preState.text} <i className="fas fa-times-circle"></i></span>)
            }
            onClick(newState.toggle);
            return newState;

        } else {

            onClick(defaultState.toggle);
            return defaultState.current;
        }
    }, [onClick]);
    const [button, dispatchButton] = useReducer(reducerFunction, defaultState.current);

    const handleClick = () => {

        dispatchButton({ data: "hi" })

    };
    return (
        <button className={`btn ${button.buttonClass} ${className}`}
            onClick={handleClick}
        >{button.text}</button>
    )
});

export default ToggleButton;