import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

function BlogPost() {
    const { id } = useParams()
    return (
        <View>
            <p>Inlägg {id}</p>
        </View>
    )
}

export default BlogPost

const View = styled.div`
    position: relative;
    top: 35vh;
    height: 50vh;
`
