import React from 'react'

const dummy = (props) => {
    return (
        <div>
            <p>Hello React World!</p>
            <p>{props.children}</p>
            <p>Today is the {props.day}th day of {props.month} in the year {props.year}</p>
        </div>
    )
}

export default dummy;