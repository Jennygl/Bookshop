import React from 'react'
import { useParams } from 'react-router-dom'

function BlogPost() {
    const { id } = useParams()
    return (
        <div>
            <p>Inlägg {id}</p>
        </div>
    )
}

export default BlogPost
