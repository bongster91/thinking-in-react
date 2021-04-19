import React from 'react'

function Issue(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.issue} opened on {props.date} by {props.author}</p>
        </div>
    )
}

export default Issue
