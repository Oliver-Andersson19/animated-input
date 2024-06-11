import React from 'react'

function AnimatedInput(props) {
    return (
        <div className='animated-input-wrapper'>
            <input
                type="text"
                autocomplete="off"
                name={props.name}
                onFocus={() => props.setFormData(prevFormData => ({
                    ...prevFormData,
                    [props.name]: {
                        ...prevFormData[props.name],
                        active: true
                    }
                }))}
                onBlur={() => props.setFormData(prevFormData => ({
                    ...prevFormData,
                    [props.name]: {
                        ...prevFormData[props.name],
                        active: false
                    }
                }))}
                onChange={props.handleInputChange}
                className={props.formData[props.name].active ? "active" : ""}
            />
            <label
                className={props.formData[props.name].active ? "active" : ""}
                style={{opacity: props.formData[props.name].content && !props.formData[props.name].active ? "0" : "1"}}
            >{props.label}</label>
        </div>
    )
}

export default AnimatedInput