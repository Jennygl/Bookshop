import React from 'react'

interface ErrorProps {
    error: string
}

function ErrorPage(props: ErrorProps) {
    return (
        <div>
            <h2>Houston, we have a {props.error}</h2>
        </div>
    )
}

export default ErrorPage
