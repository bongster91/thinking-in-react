import Status from './Status';
import Issue from './Issue';
import React from 'react'

function Issues(props) {

    const allIssues = props.issuesToShow.map((issue, i) => {
        return (
        <Issue 
            key={i}
            title={issue.title}
            issue={issue.issue}
            author={issue.author}
            date={issue.date}
        />
        )
    })
    return (
        <div>
            <Status issueCount={props.issuesToShow.length}/>
            {allIssues}
        </div>
    )
}

export default Issues
