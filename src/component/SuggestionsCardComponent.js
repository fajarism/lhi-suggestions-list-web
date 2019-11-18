import React, {useState, useEffect}from 'react'

function SuggestionsCardComponent(props) {
    return(
        <div className="card-component">
            <p className="suggestions-name">{props.suggestion.name}</p>
            <p className="suggestions-email">{props.suggestion.email}</p>
            <p className="suggestions-subject">{props.suggestion.subject}</p>
            <p className="suggestions-message">{props.suggestion.message}</p>
        </div>
    )
}

SuggestionsCardComponent.defaultProps = {
    suggestion: {}
}

export default SuggestionsCardComponent