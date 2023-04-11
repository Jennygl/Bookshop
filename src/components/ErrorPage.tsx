import React from 'react'

interface ErrorProps {
    error: string
}

function ErrorPage(props: ErrorProps) {
    return (
        <div style={{ height: '30vh', marginTop: '45vh', textAlign: 'center' }}>
            <h2>Houston, we have a {props.error}</h2>
        </div>
    )
}

export default ErrorPage
